function Dummy() {
  return (
    <>
      <title>dummy html document</title>
      <h1>HTML Dummy Page</h1>
      <hr />
      (I acknowledge Microsoft for use of their image to illustrate the
      BACKGROUND attribute on the BODY tag.)
      <br />
      <br />
      <br />
      <br />
      {/*Headings*/}
      <h3>Headings</h3>
      <h1>Level 1 Head</h1>
      <h2>Level 2 Head</h2>
      <h3>Level 3 Head</h3>
      <h4>Level 4 Head</h4>
      <h5>Level 5 Head</h5>
      <h6>Level 6 Head</h6>
      <hr />
      {/*Spacing*/}
      <h3>Spacing</h3>
      Text in one paragraph.
      <p>
        Text in another paragraph.
        <br />
        <br />
        Text before a break.
        <br />
        text after a break.
        <br />
        <br />
      </p>
      <pre>
        Preformatted text:{"\n"}
        {"  "}Indented line{"\n"}
        {"    "}Further indented line{"\n"}
      </pre>
      <br />
      <br />
      <blockquote>
        A Blockquote:
        <br />
        HTML is one of three fundamental concepts on which the WWW rests. (The
        other two are the HTTP protocol and the URL addressing/naming scheme.)
        Consequently, it is important to understand not just how to use HTML but
        also its role within the web, its capabilities and limitations, and
        possible future directions it may take.
      </blockquote>
      <br />
      <br />
      A Horizontal Rule:
      <hr />
      <hr />
      {/*Lists*/}
      <h3>Lists</h3>
      An unorderd list:
      <ul>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
      An ordered list:
      <ol>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ol>
      A definition list:
      <dl>
        <dt>term 1</dt>
        <dd>defn 1</dd>
        <dt>term 2</dt>
        <dd>defn 2</dd>
        <dt>term 3</dt>
        <dd>defn 3</dd>
      </dl>
      A nested list:
      <ul>
        <li>
          {" "}
          term 1
          <ul>
            <li>term a</li>
            <li>term b</li>
          </ul>
        </li>
        <li>
          {" "}
          term 2
          <ul>
            <li>term a</li>
            <li>term b</li>
          </ul>
        </li>
      </ul>
      A menu list:
      <menu>
        <li>
          <a href="">anchor 1</a>
        </li>
        <li>
          <a href="">anchor 2</a>
        </li>
        <li>
          <a href="">anchor 3</a>
        </li>
      </menu>
      A directory:
      <dir>
        <a href="">anchor 1</a>
        <a href="">anchor 2</a>
        <a href="">anchor 3</a>
      </dir>
      <hr />
      {/*Fonts*/}
      <h3>Fonts</h3>
      <dfn>definition font</dfn>
      <br />
      <br />
      <em>emphasis font</em>
      <br />
      <br />
      <strong>strong emphasis font</strong>
      <br />
      <br />
      <cite>citation font</cite>
      <br />
      <br />
      <kbd>keyboard font</kbd>
      <br />
      <br />
      <code>computer code font</code>
      <br />
      <br />
      <samp>sample computer output font</samp>
      <br />
      <br />
      <address>address font</address>
      <br />
      <br />
      <b>bold font</b>
      <br />
      <br />
      <i>italics font</i>
      <br />
      <br />
      <tt>typewriter font</tt>
      <hr />
      {/*Anchors*/}
      <h3>Anchors</h3>
      <a href="http://www.cs.unc.edu:80/wwwc-f95/private/notes-9-5-95.html">
        Class notes on HTML
      </a>
      <br />
      <br />
      <a href="http://www.cs.unc.edu:80/wwwc-f95/public/guru_topics.html#potential">
        Anchor to a point within a file
      </a>
      <a name="potential" />
      <hr />
      {/*Images*/}
      <h3>Images</h3>
      <img src="http://www.cs.unc.edu/~jbs/figures/jbs.jpg" />
      <br />
      <br />
      <img
        alt="Text to be displayed, if can't show image; also, aligned right."
        align="right"
        src="http://www.cs.unc.edu/~ladd/images/skull.gif"
      />
      <br />
      <br />
      <br />
      <br />
      An example of an image serving as an anchor:
      <br />
      <a href="http://www.cs.unc.edu/~jbs">
        <img src="http://www.cs.unc.edu/~jbs/figures/jbs.jpg" />
        jbs
      </a>
      <br />
      You can click on either the picture or the "jbs" just to the (lower) right
      of it to follow the link.
      <hr />
      {/*Contact Information*/}
      <h3>Contact information</h3>
      <address>
        email: <a href="mailto:jbs@cs.unc.edu">jbs@cs.unc.edu</a>
        <br />
        url: <a href="http://www.cs.unc.edu/~jbs">http://www.cs.unc.edu/~jbs</a>
      </address>
      <hr />
      {/*Netscape extensions*/}
      <h3>Netscape extensions</h3>
      <img
        alt=""
        align="left"
        hspace={10}
        src="http://www.cs.unc.edu/~jbs/figures/jbs.jpg"
      />
      In this example, the image is aligned left (standard), but it is separated
      from the wrap-around text by 10 pixels of space. It also uses the Break
      Clear All feature to separate the wrap-around text from the text that
      follows.
      <br clear="all" />
      Here is the text that follows.
      <br />
      <br />
      Example of Netscape HR extensions:
      <hr size={10} width="50%" align="center" noshade="" />
      <br />
      <br />
      Example of Netscape UL extensions:
      <ul type="square">
        <li>
          {" "}
          term 1
          <ul type="circle">
            <li>term a</li>
            <li>term b</li>
          </ul>
        </li>
        <li>
          {" "}
          term 2
          <ul type="disk">
            <li>term a</li>
            <li>term b</li>
          </ul>
        </li>
      </ul>
      <br />
      <br />
      Example of Netscape OL extensions:
      <ol type={1}>
        <li>
          {" "}
          term 1
          <ol type="A">
            <li>term a</li>
            <li>term b</li>
          </ol>
        </li>
        <li>
          {" "}
          term 2
          <ol type="I">
            <li>term a</li>
            <li>term b</li>
          </ol>
        </li>
      </ol>
      <br />
      <br />
      Fonts can now be made <font size={+3}>larger</font>,
      <font size={-2}>smaller</font>, and returned to normal.
      <br />
      <br />
      Nobreak lets you keep{" "}
      <nobr>
        lonnnnnnnnnnnnnnnnnnnnnnnnng strings together that would, otherwise, be
        broken.
      </nobr>
      <nobr>
        <br />
        <br />
        <center>
          <font size={+2}>
            <b>Text can also be centered. </b>
          </font>
        </center>
        <br />
        <br />
        Standard copyright (©) and registered (®) symbols are available.
        <hr />
        <address>
          email: <a href="mailto:jbs@cs.unc.edu">jbs@cs.unc.edu</a>
          <br />
          url:{" "}
          <a href="http://www.cs.unc.edu/~jbs">http://www.cs.unc.edu/~jbs</a>
        </address>
      </nobr>
    </>
  );
}

export default Dummy;
