interface IUser {
  userList: number[];
  twitterId: number[];
}
/**
 * @description 简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文.
 * @author angle
 * @date 2021-07-06
 * @export
 * @class Twitter
 */
export class Twitter {
  private twitterList: number[];
  private userMap: Map<number, IUser>;
  constructor() {
    this.twitterList = [];
    this.userMap = new Map<number, IUser>();
  }

  postTweet(userId: number, tweetId: number): void {
    if (this.userMap.has(userId)) {
      const user = this.userMap.get(userId)!;
      user.twitterId.unshift(this.twitterList.length);
    } else {
      this.userMap.set(userId, {
        twitterId: [this.twitterList.length],
        userList: []
      });
    }
    this.twitterList.push(tweetId);
  }

  getNewsFeed(userId: number): number[] {
    const user = this.userMap.get(userId);
    if (user) {
      const twitterArr: number[][] = user.userList.reduce<number[][]>(
        (prev, curr) => {
          const followUser = this.userMap.get(curr);
          if (followUser?.twitterId.length) {
            prev.push([...followUser.twitterId]);
          }
          return prev;
        },
        user.twitterId.length ? [[...user.twitterId]] : []
      );

      const res: number[] = [];
      if (twitterArr.length) {
        for (let i: number = 0; i < 10; i++) {
          let targetIndex = 0;
          for (let j: number = 1; j < twitterArr.length; j++) {
            if (twitterArr[j][0] > twitterArr[targetIndex][0]) {
              targetIndex = j;
            }
          }
          res.push(this.twitterList[twitterArr[targetIndex][0]]);
          if (twitterArr[targetIndex].length === 1) {
            twitterArr.splice(targetIndex, 1);
          } else {
            twitterArr[targetIndex].shift();
          }
          if (twitterArr.length === 0) {
            break;
          }
        }
      }
      return res;
    }
    return [];
  }

  follow(followerId: number, followeeId: number): void {
    const user = this.userMap.get(followerId);
    if (user) {
      if (!user.userList.includes(followeeId)) {
        user.userList.push(followeeId);
      }
    } else {
      this.userMap.set(followerId, {
        twitterId: [],
        userList: [followeeId]
      });
    }
  }

  unfollow(followerId: number, followeeId: number): void {
    const user = this.userMap.get(followerId);
    if (user) {
      const deleteIndex = user.userList.findIndex((item) => item === followeeId);
      if (deleteIndex >= 0) {
        user.userList.splice(deleteIndex, 1);
      }
    }
  }
}
