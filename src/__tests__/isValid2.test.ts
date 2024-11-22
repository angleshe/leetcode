import { isValid } from '../isValid2';
import assert from 'power-assert';

describe('src/isValid2', () => {
  describe('isValid2', () => {
    it('<DIV>This is the first line <![CDATA[<div>]]></DIV>', () =>
      assert.ok(isValid('<DIV>This is the first line <![CDATA[<div>]]></DIV>')));
    it('<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>', () =>
      assert.ok(isValid('<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>')));
    it('<A>  <B> </A>   </B>', () => assert.ok(!isValid('<A>  <B> </A>   </B>')));
    it('<DIV>  div tag is not closed  <DIV>', () =>
      assert.ok(!isValid('<DIV>  div tag is not closed  <DIV>')));
    it('<DIV>  unmatched <  </DIV>', () => assert.ok(!isValid('<DIV>  unmatched <  </DIV>')));
    it('<DIV> closed tags with invalid tag name  <b>123</b> </DIV>', () =>
      assert.ok(!isValid('<DIV> closed tags with invalid tag name  <b>123</b> </DIV>')));
    it('<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV><DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>', () =>
      assert.ok(
        !isValid(
          '<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>'
        )
      ));
    it('<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>', () =>
      assert.ok(!isValid('<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>')));
    it('<![CDATA[wahaha]]]><![CDATA[]> wahaha]]>', () =>
      assert.ok(!isValid('<![CDATA[wahaha]]]><![CDATA[]> wahaha]]>')));
    it('<A></A><B></B>', () => assert.ok(!isValid('<A></A><B></B>')));
    it('123456', () => assert.ok(!isValid('123456')));
    it('<A><A></A></A>', () => assert.ok(isValid('<A><A></A></A>')));
    it('<A><![CDATA[</A>]]123></A>', () => assert.ok(!isValid('<A><![CDATA[</A>]]123></A>')));
  });
});
