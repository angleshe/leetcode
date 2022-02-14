/**
 * @description 验证输入的字符串是否是有效的 IPv4 或 IPv6 地址
 * @author angle
 * @date 14/02/2022
 * @export
 * @param {string} queryIP
 * @return {*}  {string}
 */
export function validIPAddress(queryIP: string): string {
  const ip4 = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  const ip4Rex = new RegExp(`^(${ip4}\.){3}${ip4}$`);
  const ip6Rex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  if (ip4Rex.test(queryIP)) {
    return 'IPv4';
  }
  if (ip6Rex.test(queryIP)) {
    return 'IPv6';
  }
  return 'Neither';
}
