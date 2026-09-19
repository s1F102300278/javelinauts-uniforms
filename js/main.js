/* ========================================
   PRODUCT DATA
======================================== */

const params =
  new URLSearchParams(window.location.search);

const productId =
  params.get("id");

const product =
  typeof products !== "undefined"
    ? products[productId]
    : null;

/* 商品が存在しない場合 */

if (
  document.body.classList.contains("product-page")
  &&
  !product
) {

  window.location.href = "uniforms.html";

}


/* ========================================
   PRODUCT PAGE
======================================== */

if (product) {

  /* 商品名 */

  const productName =
    document.getElementById("product-name");

  if (productName) {
    productName.textContent = product.name;
  }

  /* 購入必須 */

const productRequired =
  document.getElementById("product-required");

if (
  productRequired &&
  product.required
) {

  productRequired.classList.add("show");

}


  /* 価格 */

  const productPrice =
    document.getElementById("product-price");

  if (productPrice) {
    productPrice.textContent = product.price;
  }


  /* デザイン */

  const productDesign =
    document.getElementById("product-design");

  if (productDesign) {
    productDesign.textContent = product.design;
  }


  /* 素材 */

  const productMaterial =
    document.getElementById("product-material");

  if (productMaterial) {
    productMaterial.textContent = product.material;
  }


  /* ========================================
   SIZE CHART
======================================== */

const sizeContainer =
  document.getElementById(
    "product-size-container"
  );


if (sizeContainer) {

  if (!product.size) {

    sizeContainer.innerHTML = `
      <p class="size-coming-soon">
        サイズ情報準備中
      </p>
    `;

  }

  

    else if (product.size.type === "javepa") {

    const createTable = (section) => {

      const headers =
        section.headers
          .map(
            (header) => `
              <th>${header}</th>
            `
          )
          .join("");


      const rows =
        section.rows
          .map(
            (row) => `

              <tr>

                ${row
                  .map(
                    (cell, index) => {

                      if (index === 0) {

                        return `
                          <th scope="row">
                            ${cell}
                          </th>
                        `;

                      }

                      return `
                        <td>${cell}</td>
                      `;

                    }
                  )
                  .join("")}

              </tr>

            `
          )
          .join("");


      return `

        <div class="size-table-wrapper">

          <table class="size-table">

            <thead>
              <tr>
                ${headers}
              </tr>
            </thead>

            <tbody>
              ${rows}
            </tbody>

          </table>

        </div>

      `;

    };


    const createMeasurements = (section) => {

      return section.measurements
        .map(
          (measurement) => `

            <div class="measurement-item">

              <span class="measurement-key">
                ${measurement.key}
              </span>

              <span class="measurement-label">
                ${measurement.label}
              </span>

            </div>

          `
        )
        .join("");

    };

        const hoodieDiagram = `

      <div class="size-diagram">

        <svg
          viewBox="0 0 320 300"
          class="javepa-diagram"
          role="img"
          aria-label="ジャベパ上 採寸位置"
        >

          <path
            class="javepa-outline"
            d="
              M120 75
              Q125 28 160 28
              Q195 28 200 75
              L230 88
              L278 225
              L250 236
              L215 135
              L215 255
              L105 255
              L105 135
              L70 236
              L42 225
              L90 88
              Z
            "
          />

          <path
            class="javepa-detail"
            d="
              M120 75
              Q135 55 160 55
              Q185 55 200 75
            "
          />


          <!-- A 着丈 -->

          <line
            class="measure-line"
            x1="230"
            y1="78"
            x2="230"
            y2="255"
          />

          <text
            class="measure-text"
            x="245"
            y="170"
          >
            A
          </text>


          <!-- B 身幅 -->

          <line
            class="measure-line"
            x1="106"
            y1="145"
            x2="214"
            y2="145"
          />

          <text
            class="measure-text"
            x="160"
            y="133"
            text-anchor="middle"
          >
            B
          </text>


          <!-- C 肩幅 -->

          <line
            class="measure-line"
            x1="91"
            y1="87"
            x2="229"
            y2="87"
          />

          <text
            class="measure-text"
            x="160"
            y="76"
            text-anchor="middle"
          >
            C
          </text>


          <!-- D 袖丈 -->

          <line
            class="measure-line"
            x1="229"
            y1="94"
            x2="272"
            y2="225"
          />

          <text
            class="measure-text"
            x="267"
            y="158"
          >
            D
          </text>

        </svg>

      </div>

    `;

        const pantsDiagram = `

      <div class="size-diagram">

        <svg
          viewBox="0 0 280 310"
          class="javepa-diagram"
          role="img"
          aria-label="ジャベパ下 採寸位置"
        >

          <path
            class="javepa-outline"
            d="
              M75 45
              L205 45
              L215 270
              Q190 280 170 270
              L140 135
              L110 270
              Q90 280 65 270
              Z
            "
          />


          <!-- ウエスト -->

          <line
            class="javepa-detail"
            x1="75"
            y1="58"
            x2="205"
            y2="58"
          />


          <!-- A 総丈 -->

          <line
            class="measure-line"
            x1="230"
            y1="45"
            x2="230"
            y2="272"
          />

          <text
            class="measure-text"
            x="245"
            y="165"
          >
            A
          </text>


          <!-- B ウエスト -->

          <line
            class="measure-line"
            x1="76"
            y1="30"
            x2="204"
            y2="30"
          />

          <text
            class="measure-text"
            x="140"
            y="20"
            text-anchor="middle"
          >
            B
          </text>


          <!-- C 股下 -->

          <line
            class="measure-line"
            x1="140"
            y1="137"
            x2="170"
            y2="270"
          />

          <text
            class="measure-text"
            x="170"
            y="205"
          >
            C
          </text>

        </svg>

      </div>

    `;

        const tops =
      product.size.sections[0];

    const bottoms =
      product.size.sections[1];


    sizeContainer.innerHTML = `

      <div class="size-guide">


        <section class="javepa-size-section">

          <div class="javepa-size-heading">

            <span>
              ${tops.name}
            </span>

            <h3>
              ${tops.label}
            </h3>

          </div>


          ${hoodieDiagram}


          <div class="measurement-list">
            ${createMeasurements(tops)}
          </div>


          <div class="size-table-header">

            <span>
              SIZE CHART
            </span>

            <span>
              （${product.size.unit}）
            </span>

          </div>


          ${createTable(tops)}

        </section>



        <section class="javepa-size-section">

          <div class="javepa-size-heading">

            <span>
              ${bottoms.name}
            </span>

            <h3>
              ${bottoms.label}
            </h3>

          </div>


          ${pantsDiagram}


          <div class="measurement-list">
            ${createMeasurements(bottoms)}
          </div>


          <div class="size-table-header">

            <span>
              SIZE CHART
            </span>

            <span>
              （${product.size.unit}）
            </span>

          </div>


          ${createTable(bottoms)}

        </section>


      </div>

    `;

  }

  else {

  

    /* =========================
       採寸図
    ========================== */

    let diagramHTML = "";


    if (product.size.type === "shirt") {

      diagramHTML = `

        <div class="size-diagram">

          <svg
            viewBox="0 0 320 260"
            class="shirt-diagram"
            role="img"
            aria-label="ユニフォーム採寸位置"
          >

            <!-- シャツ本体 -->

            <path
              class="shirt-outline"
              d="
                M110 52
                L72 66
                L32 100
                L57 132
                L92 108
                L92 220
                Q160 238 228 220
                L228 108
                L263 132
                L288 100
                L248 66
                L210 52
                Q193 78 160 78
                Q127 78 110 52
                Z
              "
            />


            <!-- 襟 -->

            <path
              class="shirt-detail"
              d="
                M110 52
                Q127 78 160 78
                Q193 78 210 52
                Q185 62 160 62
                Q135 62 110 52
              "
            />


            <!-- A 胸囲 -->

            <line
              class="measure-line"
              x1="94"
              y1="135"
              x2="226"
              y2="135"
            />

            <line
              class="measure-cap"
              x1="94"
              y1="128"
              x2="94"
              y2="142"
            />

            <line
              class="measure-cap"
              x1="226"
              y1="128"
              x2="226"
              y2="142"
            />

            <text
              class="measure-text"
              x="160"
              y="124"
              text-anchor="middle"
            >
              A
            </text>


            <!-- B 着丈 -->

            <line
              class="measure-line"
              x1="242"
              y1="66"
              x2="242"
              y2="220"
            />

            <line
              class="measure-cap"
              x1="235"
              y1="66"
              x2="249"
              y2="66"
            />

            <line
              class="measure-cap"
              x1="235"
              y1="220"
              x2="249"
              y2="220"
            />

            <text
              class="measure-text"
              x="257"
              y="148"
            >
              B
            </text>

          </svg>

        </div>

      `;

    }

    if (product.size.type === "pants") {

  diagramHTML = `

    <div class="size-diagram">

      <svg
        viewBox="0 0 320 270"
        class="pants-diagram"
        role="img"
        aria-label="パンツ採寸位置"
      >

        <!-- パンツ本体 -->

        <path
          class="pants-outline"
          d="
            M82 55
            L238 55
            L250 215
            Q218 232 181 218
            L160 158
            L139 218
            Q102 232 70 215
            Z
          "
        />


        <!-- ウエスト部分 -->

        <path
          class="pants-detail"
          d="
            M82 55
            Q160 68 238 55
          "
        />

        <path
          class="pants-detail"
          d="
            M84 67
            Q160 79 236 67
          "
        />


        <!-- A ウエスト周囲 -->

        <path
          class="measure-line no-fill"
          d="
            M84 46
            Q160 25 236 46
          "
        />

        <line
          class="measure-cap"
          x1="84"
          y1="40"
          x2="84"
          y2="52"
        />

        <line
          class="measure-cap"
          x1="236"
          y1="40"
          x2="236"
          y2="52"
        />

        <text
          class="measure-text"
          x="160"
          y="26"
          text-anchor="middle"
        >
          A
        </text>


        <!-- B パンツ丈 -->

        <line
          class="measure-line"
          x1="261"
          y1="58"
          x2="273"
          y2="215"
        />

        <line
          class="measure-cap"
          x1="254"
          y1="59"
          x2="268"
          y2="57"
        />

        <line
          class="measure-cap"
          x1="266"
          y1="216"
          x2="280"
          y2="214"
        />

        <text
          class="measure-text"
          x="286"
          y="142"
        >
          B
        </text>

      </svg>

    </div>

  `;

}

    if (product.size.type === "long-shirt") {

  diagramHTML = `

    <div class="size-diagram">

      <svg
        viewBox="0 0 360 260"
        class="shirt-diagram"
        role="img"
        aria-label="長袖ユニフォーム採寸位置"
      >

        <!-- 長袖シャツ本体 -->

        <path
          class="shirt-outline"
          d="
            M125 52
            L92 63
            L25 92
            L38 125
            L100 105
            L100 220
            Q180 238 260 220
            L260 105
            L322 125
            L335 92
            L268 63
            L235 52
            Q215 78 180 78
            Q145 78 125 52
            Z
          "
        />


        <!-- 襟 -->

        <path
          class="shirt-detail"
          d="
            M125 52
            Q145 78 180 78
            Q215 78 235 52
            Q207 62 180 62
            Q153 62 125 52
          "
        />


        <!-- A 胸囲 -->

        <line
          class="measure-line"
          x1="101"
          y1="137"
          x2="259"
          y2="137"
        />

        <line
          class="measure-cap"
          x1="101"
          y1="130"
          x2="101"
          y2="144"
        />

        <line
          class="measure-cap"
          x1="259"
          y1="130"
          x2="259"
          y2="144"
        />

        <text
          class="measure-text"
          x="180"
          y="126"
          text-anchor="middle"
        >
          A
        </text>


        <!-- B 着丈 -->

        <line
          class="measure-line"
          x1="276"
          y1="64"
          x2="276"
          y2="220"
        />

        <line
          class="measure-cap"
          x1="269"
          y1="64"
          x2="283"
          y2="64"
        />

        <line
          class="measure-cap"
          x1="269"
          y1="220"
          x2="283"
          y2="220"
        />

        <text
          class="measure-text"
          x="291"
          y="150"
        >
          B
        </text>


        <!-- C 袖丈 -->

        <line
          class="measure-line"
          x1="236"
          y1="48"
          x2="327"
          y2="87"
        />

        <line
          class="measure-cap"
          x1="232"
          y1="54"
          x2="240"
          y2="42"
        />

        <line
          class="measure-cap"
          x1="323"
          y1="93"
          x2="331"
          y2="81"
        />

        <text
          class="measure-text"
          x="288"
          y="53"
          text-anchor="middle"
        >
          C
        </text>

      </svg>

    </div>

  `;

}

if (product.size.type === "sleeveless") {

  diagramHTML = `

    <div class="size-diagram">

      <svg
        viewBox="0 0 300 270"
        class="sleeveless-diagram"
        role="img"
        aria-label="スリーブレス採寸位置"
      >

        <!-- 本体 -->

        <path
          class="sleeveless-outline"
          d="
            M105 42
            Q125 60 150 60
            Q175 60 195 42

            L225 55

            Q204 82 205 112

            L220 225

            Q150 240 80 225

            L95 112

            Q96 82 75 55

            Z
          "
        />


        <!-- 襟 -->

        <path
          class="shirt-detail"
          d="
            M105 42
            Q125 68 150 68
            Q175 68 195 42
          "
        />


        <!-- A 身幅 -->

        <line
          class="measure-line"
          x1="94"
          y1="125"
          x2="206"
          y2="125"
        />

        <line
          class="measure-cap"
          x1="94"
          y1="118"
          x2="94"
          y2="132"
        />

        <line
          class="measure-cap"
          x1="206"
          y1="118"
          x2="206"
          y2="132"
        />

        <text
          class="measure-text"
          x="150"
          y="114"
          text-anchor="middle"
        >
          A
        </text>


        <!-- B 着丈 -->

        <line
          class="measure-line"
          x1="235"
          y1="48"
          x2="235"
          y2="225"
        />

        <line
          class="measure-cap"
          x1="228"
          y1="48"
          x2="242"
          y2="48"
        />

        <line
          class="measure-cap"
          x1="228"
          y1="225"
          x2="242"
          y2="225"
        />

        <text
          class="measure-text"
          x="251"
          y="142"
        >
          B
        </text>

      </svg>

    </div>

  `;

}

if (product.size.type === "tanktop") {

  diagramHTML = `

    <div class="size-diagram">

      <svg
        viewBox="0 0 300 280"
        class="tanktop-diagram"
        role="img"
        aria-label="タンクトップ採寸位置"
      >

        <!-- タンクトップ本体 -->

        <path
          class="tanktop-outline"
          d="
            M108 38
            L91 45

            Q95 82 73 103

            L82 224

            Q150 244 218 224

            L227 103

            Q205 82 209 45

            L192 38

            Q184 82 150 82
            Q116 82 108 38

            Z
          "
        />


        <!-- 襟 -->

        <path
          class="shirt-detail"
          d="
            M108 38
            Q116 82 150 82
            Q184 82 192 38
          "
        />


        <!-- A 胸囲（周囲） -->

        <path
          class="measure-line no-fill"
          d="
            M76 116
            Q150 95 224 116
          "
        />

        <path
          class="measure-line no-fill"
          d="
            M76 116
            Q150 137 224 116
          "
        />

        <text
          class="measure-text"
          x="150"
          y="101"
          text-anchor="middle"
        >
          A
        </text>


        <!-- B 着丈 -->

        <line
          class="measure-line"
          x1="245"
          y1="42"
          x2="245"
          y2="226"
        />

        <line
          class="measure-cap"
          x1="238"
          y1="42"
          x2="252"
          y2="42"
        />

        <line
          class="measure-cap"
          x1="238"
          y1="226"
          x2="252"
          y2="226"
        />

        <text
          class="measure-text"
          x="261"
          y="142"
        >
          B
        </text>

      </svg>

    </div>

  `;

}


    /* =========================
       A / B の説明
    ========================== */

    const measurementHTML =
      product.size.measurements
        .map(
          (measurement) => `

            <div class="measurement-item">

              <span class="measurement-key">
                ${measurement.key}
              </span>

              <span class="measurement-label">
                ${measurement.label}
              </span>

            </div>

          `
        )
        .join("");


    /* =========================
       TABLE
    ========================== */

    /* =========================
   TABLE
========================= */

let tablesHTML = "";


/* 男女など複数のサイズ表がある商品 */

if (product.size.groups) {

  tablesHTML =
    product.size.groups
      .map((group) => {

        const headers =
          group.headers
            .map(
              (header) => `
                <th>${header}</th>
              `
            )
            .join("");


        const rows =
          group.rows
            .map(
              (row) => `

                <tr>

                  ${row
                    .map(
                      (cell, index) => {

                        if (index === 0) {

                          return `
                            <th scope="row">
                              ${cell}
                            </th>
                          `;

                        }

                        return `
                          <td>${cell}</td>
                        `;

                      }
                    )
                    .join("")}

                </tr>

              `
            )
            .join("");


        return `

          <div class="size-group">

            <div class="size-group-title">
              ${group.name}
            </div>

            <div class="size-table-wrapper">

              <table class="size-table">

                <thead>
                  <tr>
                    ${headers}
                  </tr>
                </thead>

                <tbody>
                  ${rows}
                </tbody>

              </table>

            </div>

          </div>

        `;

      })
      .join("");

}


/* 通常の商品 */

else {

  const headers =
    product.size.headers
      .map(
        (header) => `
          <th>${header}</th>
        `
      )
      .join("");


  const rows =
    product.size.rows
      .map(
        (row) => `

          <tr>

            ${row
              .map(
                (cell, index) => {

                  if (index === 0) {

                    return `
                      <th scope="row">
                        ${cell}
                      </th>
                    `;

                  }

                  return `
                    <td>${cell}</td>
                  `;

                }
              )
              .join("")}

          </tr>

        `
      )
      .join("");


  tablesHTML = `

    <div class="size-table-wrapper">

      <table class="size-table">

        <thead>
          <tr>
            ${headers}
          </tr>
        </thead>

        <tbody>
          ${rows}
        </tbody>

      </table>

    </div>

  `;

}


/* =========================
   最終出力
========================= */

sizeContainer.innerHTML = `

  <div class="size-guide">

    ${diagramHTML}


    <div class="measurement-list">

      ${measurementHTML}

    </div>


    <div class="size-table-header">

      <span>SIZE CHART</span>

      <span>
        （${product.size.unit}）
      </span>

    </div>


    ${tablesHTML}


    ${
      product.size.note
        ? `
          <p class="size-note">
            ${product.size.note}
          </p>
        `
        : ""
    }

  </div>

`;

  }

}


  /* ========================================
     GALLERY IMAGE GENERATION
  ======================================== */

  const galleryTrack =
    document.getElementById("gallery-track");


  if (galleryTrack) {

    product.images.forEach(
      (imagePath, index) => {

        const slide =
          document.createElement("div");

        slide.classList.add(
          "gallery-slide"
        );


        const image =
          document.createElement("img");

        image.src = imagePath;

        image.alt =
          `${product.name} 商品写真 ${index + 1}`;


        slide.appendChild(image);

        galleryTrack.appendChild(slide);

      }
    );

  }


  /* ========================================
     REVIEWS
  ======================================== */

  const reviewContainer =
    document.getElementById(
      "review-container"
    );


  if (reviewContainer) {

    if (product.reviews.length === 0) {

      reviewContainer.innerHTML = `
        <p class="no-review">
          レビューはまだありません。
        </p>
      `;

    }

    else {

      /* 平均評価 */

      const total =
        product.reviews.reduce(
          (sum, review) =>
            sum + review.rating,
          0
        );


      const average =
        (
          total /
          product.reviews.length
        ).toFixed(1);


      /* 総合評価 */

      const summary =
        document.createElement("div");

      summary.classList.add(
        "review-summary"
      );


      summary.innerHTML = `
        <span class="review-summary-label">
          総合評価
        </span>

        <span class="review-summary-score">
          ★ ${average}
        </span>
      `;


      reviewContainer.appendChild(
        summary
      );


      /* 各レビュー */

      const reviewList =
        document.createElement("div");

      reviewList.classList.add(
        "review-list"
      );


      product.reviews.forEach(
        (review) => {

          const reviewItem =
            document.createElement("div");

          reviewItem.classList.add(
            "review-item"
          );


          const stars =
            "★".repeat(review.rating)
            +
            "☆".repeat(
              5 - review.rating
            );


          reviewItem.innerHTML = `
            <div class="review-meta">

              <span class="review-name">
                ${review.name}
              </span>

              <span class="review-stars">
                ${stars}
              </span>

              <span class="review-score">
                ${review.rating.toFixed(1)}
              </span>

            </div>

            <p>
              ${review.comment}
            </p>
          `;


          reviewList.appendChild(
            reviewItem
          );

        }
      );


      reviewContainer.appendChild(
        reviewList
      );

    }

  }

}


/* ========================================
   GALLERY
======================================== */

const galleryTrack =
  document.querySelector(".gallery-track");

const gallerySlides =
  document.querySelectorAll(".gallery-slide");

const prevButton =
  document.querySelector(".gallery-prev");

const nextButton =
  document.querySelector(".gallery-next");

const dotsContainer =
  document.querySelector(".gallery-dots");


if (
  galleryTrack &&
  gallerySlides.length > 0 &&
  prevButton &&
  nextButton &&
  dotsContainer
) {

    /* 写真が1枚しかない場合 */

if (gallerySlides.length === 1) {

  prevButton.style.display = "none";
  nextButton.style.display = "none";

}

  let currentIndex = 0;

  let touchStartX = 0;
  let touchEndX = 0;


  /* 丸ポチ生成 */

  gallerySlides.forEach(
    (slide, index) => {

      const dot =
        document.createElement("button");

      dot.classList.add(
        "gallery-dot"
      );

      dot.type = "button";


      if (index === 0) {
        dot.classList.add("active");
      }


      dot.addEventListener(
        "click",
        () => {

          currentIndex = index;

          updateGallery();

        }
      );


      dotsContainer.appendChild(dot);

    }
  );


  const dots =
    dotsContainer.querySelectorAll(
      ".gallery-dot"
    );


  function updateGallery() {

    galleryTrack.style.transform =
      `translateX(-${currentIndex * 100}%)`;


    dots.forEach(
      (dot, index) => {

        dot.classList.toggle(
          "active",
          index === currentIndex
        );

      }
    );

  }


  function showNext() {

    currentIndex =
      (currentIndex + 1)
      %
      gallerySlides.length;

    updateGallery();

  }


  function showPrevious() {

    currentIndex =
      (
        currentIndex
        - 1
        + gallerySlides.length
      )
      %
      gallerySlides.length;

    updateGallery();

  }


  nextButton.addEventListener(
    "click",
    showNext
  );


  prevButton.addEventListener(
    "click",
    showPrevious
  );


  /* スワイプ */

  galleryTrack.addEventListener(
    "touchstart",
    (event) => {

      touchStartX =
        event.touches[0].clientX;

    },
    {
      passive: true
    }
  );


  galleryTrack.addEventListener(
    "touchend",
    (event) => {

      touchEndX =
        event.changedTouches[0].clientX;


      const distance =
        touchStartX - touchEndX;


      if (Math.abs(distance) < 50) {
        return;
      }


      if (distance > 0) {
        showNext();
      }

      else {
        showPrevious();
      }

    },
    {
      passive: true
    }
  );

}


/* ========================================
   ACCORDION
======================================== */

const accordionHeaders =
  document.querySelectorAll(
    ".accordion-header"
  );


accordionHeaders.forEach(
  (header) => {

    header.addEventListener(
      "click",
      () => {

        const content =
          header.nextElementSibling;


        const isOpen =
          header.getAttribute(
            "aria-expanded"
          ) === "true";


        header.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );


        content.classList.toggle(
          "open",
          !isOpen
        );

      }
    );

  }
);






/* ========================================
   PAGE TRANSITION
======================================== */

document.querySelectorAll('a[href]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      link.target === "_blank"
    ) {
      return;
    }

    event.preventDefault();

    document.body.classList.add("page-leaving");

    setTimeout(() => {

      window.location.href = href;

    }, 400);

  });

});


/* 戻る操作対策 */

window.addEventListener("pageshow", () => {

  document.body.classList.remove("page-leaving");

});