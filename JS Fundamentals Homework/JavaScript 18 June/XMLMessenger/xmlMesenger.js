function xmlMessenger(stringMessage) {
    let pattern = /^<message((\s+[a-z]+="[A-Za-z0-9 .]+"\s*)*)>(\n|.+)<\/message>$/gm;

    let matches = pattern.exec(stringMessage);
    if (!matches) {
        console.log("Invalid message format");
        return;
    }

    let fromPattern = /from="([A-Za-z0-9 .]+)"/;
    let toPattern = /to="([A-Za-z0-9 .]+)"/;
    let matchFrom = fromPattern.exec(matches[1]);
    let matchTo = toPattern.exec(matches[1]);

    if (!matchFrom || !matchTo) {
        console.log('Missing attributes');
        return;
    }


    console.log(`<article>
  <div>From: <span class="sender">${matchFrom[1]}</span></div>
  <div>To: <span class="recipient">${matchTo[1]}</span></div>
  <div>
    <p>${matches[3]}</p>
  </div>
</article>
`);

}


xmlMessenger('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>');


