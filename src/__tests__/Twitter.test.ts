import assert from 'power-assert';
import { Twitter } from '../Twitter';

describe('src/Twitter', () => {
  describe('Twitter', () => {
    const twitter1 = new Twitter();
    twitter1.postTweet(1, 5);
    const test1 = twitter1.getNewsFeed(1);
    it('test1', () => assert.deepStrictEqual(test1, [5]));
    twitter1.follow(1, 2);
    twitter1.postTweet(2, 6);
    const test2 = twitter1.getNewsFeed(1);
    it('test2', () => assert.deepStrictEqual(test2, [6, 5]));
    twitter1.unfollow(1, 2);
    const test3 = twitter1.getNewsFeed(1);
    it('test3', () => assert.deepStrictEqual(test3, [5]));

    const twitter2 = new Twitter();
    twitter2.postTweet(1, 1);
    const test4 = twitter2.getNewsFeed(1);
    it('test4', () => assert.deepStrictEqual(test4, [1]));
    twitter2.follow(2, 1);
    const test5 = twitter2.getNewsFeed(2);
    it('test5', () => assert.deepStrictEqual(test5, [1]));
    twitter2.unfollow(2, 1);
    const test6 = twitter2.getNewsFeed(2);
    it('test6', () => assert.deepStrictEqual(test6, []));

    const twitter3 = new Twitter();
    twitter3.postTweet(2, 5);
    twitter3.follow(1, 2);
    twitter3.follow(1, 2);
    const test7 = twitter3.getNewsFeed(1);
    it('test7', () => assert.deepStrictEqual(test7, [5]));
  });
});
