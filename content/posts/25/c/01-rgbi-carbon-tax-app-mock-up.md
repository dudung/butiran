+++
title = 'rgbi carbon-tax app mock-up'
date = '2025-03-01T05:18:01+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['daily-notes']
url = '25c01'
+++

+ Rssult
{{< rawhtml >}}
<div style="display: flex">

  <div id="left">

    <div>
      <button>Hitung</button>
    </div>

    <div>
      <span>Model</span>
      <br />
      <select>
        <option>Tapio Decoupling</option>
        <option>STIRPAT</option>
      </select>
    </div>

    <div>
      <span>Skenario</span>
      <br />
      <select style="width: 250px;">
        <option>S0 - Business as Usual (BAU)</option>
        <option>S1 - Pajak Karbon \n Rendah - Standar</option>
        <option>S2 - Pajak Karbon + Faktor Rendah</option>
        <option>S3 - Pajak Karbon + Faktor Tinggi</option>
        <option>S4 - Pajak Karbon + Investasi Energi Hijau Tinggi</option>
        <option>S5 - Pajak Karbon + PDB dan Fosil Tinggi, Terbarukan Rendah</option>
        <option>S6 - Pajak Karbon + Pertumbuhan Energi Berimbang</option>
        <option>S7 - Pajak Karbon + Dominasi Energi Terbarukan</option>
        <option>S8 - Pajak Karbon + Pertumbuhan Komersial dan Moderasi Energi</option>
      </select>
    </div>

  </div>

  <div id="right" style="padding-left: 2em;">

    <div>
      <span>Hasil</>
      <table>
        <tr>
          <td>I (emisi karbon)      </td><td> <input style="width: 50px;" /></td>
        </tr>
        <tr>
          <td>P (Populasi)          </td><td> <input style="width: 50px;" /></td>
        </tr>
        <tr>
          <td>A (Aktivitas Ekonomi) </td><td> <input style="width: 50px;" /></td>
        </tr>
        <tr>
          <td>T (Teknologi)         </td><td> <input style="width: 50px;" /></td>
        </tr>
      </table>
    </div>
    <br />

    <div>
      <span>Metrik</span>
      <table>
      <tr>
        <td>MAPE</td><td> <input style="width: 50px;" /></td>
      </tr>
      <tr>
        <td>RMSE</td><td> <input style="width: 50px;" /></td>
      </tr>
      </table>
    </div>

  </div>

</div>
{{< /rawhtml >}}
+ Code
```html
<div style="display: flex">

  <div id="left">

    <div>
      <button>Hitung</button>
    </div>

    <div>
      <span>Model</span>
      <br />
      <select>
        <option>Tapio Decoupling</option>
        <option>STIRPAT</option>
      </select>
    </div>

    <div>
      <span>Skenario</span>
      <br />
      <select style="width: 250px;">
        <option>S0 - Business as Usual (BAU)</option>
        <option>S1 - Pajak Karbon \n Rendah - Standar</option>
        <option>S2 - Pajak Karbon + Faktor Rendah</option>
        <option>S3 - Pajak Karbon + Faktor Tinggi</option>
        <option>S4 - Pajak Karbon + Investasi Energi Hijau Tinggi</option>
        <option>S5 - Pajak Karbon + PDB dan Fosil Tinggi, Terbarukan Rendah</option>
        <option>S6 - Pajak Karbon + Pertumbuhan Energi Berimbang</option>
        <option>S7 - Pajak Karbon + Dominasi Energi Terbarukan</option>
        <option>S8 - Pajak Karbon + Pertumbuhan Komersial dan Moderasi Energi</option>
      </select>
    </div>

  </div>

  <div id="right" style="padding-left: 2em;">

    <div>
      <span>Hasil</>
      <table>
        <tr>
          <td>I (emisi karbon)      </td><td> <input style="width: 50px;" /></td>
        </tr>
        <tr>
          <td>P (Populasi)          </td><td> <input style="width: 50px;" /></td>
        </tr>
        <tr>
          <td>A (Aktivitas Ekonomi) </td><td> <input style="width: 50px;" /></td>
        </tr>
        <tr>
          <td>T (Teknologi)         </td><td> <input style="width: 50px;" /></td>
        </tr>
      </table>
    </div>
    <br />

    <div>
      <span>Metrik</span>
      <table>
      <tr>
        <td>MAPE</td><td> <input style="width: 50px;" /></td>
      </tr>
      <tr>
        <td>RMSE</td><td> <input style="width: 50px;" /></td>
      </tr>
      </table>
    </div>

  </div>

</div>
```
