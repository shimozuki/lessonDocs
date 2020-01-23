HTML/JS

div/innerHTML/innerText

<div></div> is one the most important tags in modern web design.
Creates a box to group other elements together.

<div>
  <input type="text" class="username" />
  <input type="password" class="password" />
  <button>Log in</button>
</div>

<input> and <button> are children of the div element.
They are also siblings of each other.

innerHTML

<div class="container">
</div>
<script>
  const box = document.querySelector('.container')
  box.innerHTML = `<input type="text" class="username"/>`
</script>

Above we are using JavaScript to create the HTML tags inside the div tag.

Be careful when setting innerHTML.
Elements lose their properties when they're replaced by other elemtns.

InnerText

<div class="heading"></div>
<script>
  const h1Element = document.querySelector('.heading')
  h1Element.innerText = "The hardest choics require the strongest wills."
</script>

If you do not wish to create new HTML elements and simply wisht ot change the text inside and element, you can use innerText.
