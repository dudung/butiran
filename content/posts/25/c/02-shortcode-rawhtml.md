+++
title = 'shortcode rawhtml'
date = '2025-03-01T05:26:45+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['shortcode', 'rawhtml']
categories = ['hugo']
url = '25c02'
+++

+ Result
{{< rawhtml >}}
  <form>
    <table>
      <tr>
        <td>
          <label for="name">Name</label>
        </td>
        <td>
         <input type="text" id="name" name="name">
        </td>
      </tr>
      <tr>
        <td>
          <label for="email">Email</label>
        </td>
        <td>
         <input type="email" id="email" name="email">
        </td>
      </tr>
      <tr>
        <td>
          <label for="options">Option</label>
        </td>
        <td>
          <select id="options" name="options">
            <option value="one">One</option>
            <option value="two">Two</option>
          </select><br>
        </td>
      </tr>
      <tr>
        <td>
        </td>
        <td style="text-align: right;">
         <button type="submit">Submit</button>
        </td>
      </tr>
    </table>
  </form>
{{< /rawhtml >}}
+ Shortcode `layouts/shortcodes/rawhtml.html`
```html
<style>
.rawhtml-container {
    padding: 1rem;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow-x: auto;
}

/* Styling for form elements */
.rawhtml-container input,
.rawhtml-container select,
.rawhtml-container textarea,
.rawhtml-container button {
    margin: 5px 0;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.rawhtml-container button {
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.rawhtml-container button:hover {
    background-color: #0056b3;
}

.rawhtml-container table tr td {
    border: 0px black solid;
}
.rawhtml-container table tr {
    background: none;
}
</style>

<div class="rawhtml-container">
    {{ .Inner | safeHTML }}
</div>
```
