const headHtml = require('./head.html')
module.exports = startedAt => `<!DOCTYPE html>
<html>
${headHtml('Matematikeditor')}
<body>
<article>
    <section>
        <a href="https://github.com/digabi/math-editor"><img style="position: absolute; top: 0; right: 0; border: 0;"
                                                             src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
                                                             alt="Fork me on GitHub"
                                                             data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"></a>
        <script>
        </script>
        <h3>Formeleditorns första utvecklingsversion</h3>
        <p>
            <small><pre>
Editorn fungerar bäst med browsern Firefox. Under knappen “Lägg till formel” hittar du de vanligaste beteckningarna som används i matematik, fysik och kemi. Dessutom kan du använda specialtecken för att skriva formler.
Det går att konstruera formler genom att klicka på beteckningarna i menyerna och/eller genom att skriva LaTeX.
Det går förutom att skriva text och formler, att också att lägga till bilder i svarsfältet.

Tips på tangentkombinationer:

Ctrl-V       Lägg till en bild från klippbordet
Ctrl-L       Skriv en formel
Bråkstreck får man även med / -märket
Multiplikationstecken får man även med * -märket
</pre>
            </small>
        </p>

        <hr/>
        <div class="toolbar">
            <!--<div class="tags">-->
            <!--<span class="toggle">Muotoilu</span>-->
            <!--<div class="list" style="display: none"></div>-->
            <!--</div>-->
            <div class="characters">
                <span class="special-characters">Specialtecken</span>
                <div class="list"></div>
            </div>
            <p>
                <button class="newEquation actionButton" title="Ctrl-L">Lägg till formerl</button>
            </p>
            <div class="mathToolbar list"></div>
        </div>

        <div class="answer" contenteditable="true"></div>
        <div class="outerPlaceholder" style="display: none">
            <div class="math">
                <div class="close" title="Ctrl-Enter">stäng</div>
                <div class="boxes">
                    <div class="equationEditor"></div>
                    <textarea class="latexEditor" placeholder="LaTex"></textarea>
                </div>
            </div>
        </div>
        <button class="save actionButton">Spara</button>
    </section>
</article>
<footer>
    <section>
        <div class="paragraph">
            Uppdaterad ${startedAt}
        </div>
        <div class="paragraph">
            <a href="mailto:abitti@ylioppilastutkinto.fi?subject=Palaute / Math-editor">Skicka feedback
                (abitti@ylioppilastutkinto.fi)</a>
        </div>
        <div class="paragraph">
            <a href="/">Suomeksi</a>
        </div>
    </section>
</footer>
<script src="/student.js"></script>
<script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-49446143-7', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>`
