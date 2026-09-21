const products = {

  /* ========================================
     青ユニ 半袖
  ======================================== */

  "blue-short": {

    name: "青ユニ 半袖",

    required: true,

    price: "¥4500",

    images: [
      "images/uniforms/blue1.png",
      "images/uniforms/blue2.png",
      "images/uniforms/blue3.png",
      "images/uniforms/blue4.png",
      "images/uniforms/blue5.png",
      "images/uniforms/blue6.png",
      "images/uniforms/blue7.png",
      "images/uniforms/blue8.png",
      "images/uniforms/blue9.png"
    ],

    design: `鮮やかなネイビーを基調に、ホワイトとゴールドをアクセントとして効かせた、端正かつ存在感のある一着。\nスポーツウェアの機能美と洗練を兼ね備え、フィールドに立つ者の姿をより美しく引き立てる。\nシンプルでありながら、記憶に残る。そんな一着である。`,

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nこれを着た大男が豊洲に出没したというが、真偽は定かではない。もしこの話が真実であるならば、いわゆるゲームシャツという近年のファッション領域にアルティメットが頭角を現しつつあることを意味する。どうか虚偽であってほしい。",

    size: {

  type: "shirt",

  measurements: [
    {
      key: "A",
      label: "胸囲（周囲）"
    },
    {
      key: "B",
      label: "着丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B"
  ],

  rows: [
    ["XS", "91.5", "68.5"],
    ["S", "96.5", "71.0"],
    ["M", "101.5", "74.0"],
    ["L", "106.5", "76.0"],
    ["XL", "111.5", "79.0"],
    ["2XL", "116.5", "81.0"]
  ],

  unit: "cm"

},

    reviews: [
      {
    name: "小松優之介[#25]",
    rating: 5,
    comment: "身長:176cm、体重:60kg、性格:穏やか\n 購入サイズはLです。"
  },
  {
    name: "下山田蓮治[#12]",
    rating: 5,
    comment: "このユニを着た人、男女問わず性的な目で見てしまいます"
  },
  {
    name: "南谷爽太郎[#35]",
    rating: 4,
    comment: "俺が着るにふさわしいユニ"
  },
  {
    name: "成井佳貴[#6]",
    rating: 3,
    comment: "笑える"
  },
  {
    name: "白田翼[#74]",
    rating: 5,
    comment: "2026年学生予選の車が楽しかったです"
  },


]

  },


  /* ========================================
     白ユニ 半袖
  ======================================== */

  "white-short": {

    name: "白ユニ 半袖",

    required: true,

    price: "¥4500",

    images: [
      "images/uniforms/white1.png",
      "images/uniforms/white2.png",
      "images/uniforms/white3.png",
      "images/uniforms/white4.png",
      "images/uniforms/white5.png",
      "images/uniforms/white6.png",
      "images/uniforms/white7.png",
      "images/uniforms/white8.png"
    ],

    design:
      "無垢なホワイトを基調に、ネイビーとゴールドのラインを施した、清潔感と品格を感じさせる一着。\n無駄を削ぎ落としたミニマルなデザインでありながら、胸元のロゴと袖のディテールが確かな存在感を演出する。\n凛とした美しさを纏う、洗練されたゲームウェアだ。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nどっかのデブはラーメン食って汁をこぼし、どっかのブスは雨の日にダイブして泥だらけにしてた。\n洗濯機とママを敵に回したくなければ、不要不急の着用を避けるのが賢い立ち回りと言えよう。こいつのせいでママに怒られたのでDティアです。",

    size: {

  type: "shirt",

  measurements: [
    {
      key: "A",
      label: "胸囲（周囲）"
    },
    {
      key: "B",
      label: "着丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B"
  ],

  rows: [
    ["XS", "91.5", "68.5"],
    ["S", "96.5", "71.0"],
    ["M", "101.5", "74.0"],
    ["L", "106.5", "76.0"],
    ["XL", "111.5", "79.0"],
    ["2XL", "116.5", "81.0"]
  ],

  unit: "cm"

},

    reviews: [
       
  {
    name: "下山田蓮治[#12]",
    rating: 5,
    comment: "汚せば汚すほどかっこいいです"
  },
  {
    name: "深瀬光[#23]",
    rating: 5,
    comment: "俺は白ユニ派"
  },
  {
    name: "南谷爽太郎[#35]",
    rating: 2,
    comment: "練習で普段使いしたらマジでやばい。鬼汚れる。"
  },
  {
    name: "吉野佑飛[#44]",
    rating: 3,
    comment: "これ着てラーメン食ったらママに怒られた"
  }
    ]

  },


  /* ========================================
     パンツ
  ======================================== */

  "pants": {

    name: "パンツ",

    required: true,

    price: "¥4,000〜¥4,800",

    images: [
      "images/uniforms/pants1.png",
      "images/uniforms/pants2.png",
      "images/uniforms/pants3.png",
      "images/uniforms/pants4.png",
      "images/uniforms/pants5.png",
      "images/uniforms/pants6.png"
    ],

    design:
      "漆黒のボディにゴールドとホワイトのラインを重ねた、JAVELINAUTSのゲームショーツ。\n大胆な配色でありながら、余計な装飾を抑えたデザインによって、洗練された佇まいに仕上げている。\n\nフロントに刻まれた「25」のナンバーに加え、バックにはチームを象徴するエンブレムと「Since 2013」の文字を配置。\nゴールドで描かれた騎士のモチーフが、勝利への意志とチームの誇りを静かに物語る。\n\n競技のための機能性を備えながらも、細部までデザインにこだわった、フィールドで存在感を放つ一着である。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\n元々白色だったため「汗で透ける」や「汚れが目立つ」という悩みが後を絶たなかった。\nそのため、かの有名デザイナーRENJI SHIMOYAMAが満を持してユニフォームを一新した。黒色にしたことで悩みが解消されただけでなく、なんか強そうに見えることが発覚。\nジャベ史に残る偉業の一つと言えよう。",

    size: {

  type: "pants",

  measurements: [
    {
      key: "A",
      label: "ウエスト（周囲）"
    },
    {
      key: "B",
      label: "パンツ丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B"
  ],

  rows: [
    ["XS", "70", "48"],
    ["S", "72", "51"],
    ["M", "75", "53"],
    ["L", "77", "56"],
    ["XL", "80", "58"],
    ["2XL", "82", "61"]
  ],

  unit: "cm"

},

    reviews: [
      {
    name: "小松優之介[#25]",
    rating: 5,
    comment: "身長:176cm、体重:60kg、性格:穏やか\n 購入サイズはLです。"
  },
  {
    name: "下山田蓮治[#12]",
    rating: 3,
    comment: "俺がこの黒パンツを考案しじゃべに導入しました。"
  },
  {
    name: "川中日翔[#90]",
    rating: 2,
    comment: "前の白のパンツの方がよかった。だれだよ考案したやつ"
  },
  {
    name: "下山田蓮治[#12]",
    rating: 3,
    comment: "やんのかてめえ"
  }
    ]

  },


  /* ========================================
     青ユニ 長袖
  ======================================== */

  "blue-long": {

    name: "青ユニ 長袖",

    required: false,

    price: "¥5500",

    images: [
      "images/uniforms/blue_long1.png",
      "images/uniforms/blue_long2.png",
      "images/uniforms/blue_long3.png",
      "images/uniforms/blue_long4.png",
      "images/uniforms/blue_long5.png",
      "images/uniforms/blue_long6.png",
      "images/uniforms/blue_long7.png",
      "images/uniforms/blue_long8.png"
    ],

    design:
      "鮮やかなネイビーを基調に、ホワイトとゴールドをアクセントとして効かせた、端正かつ存在感のある一着。\nスポーツウェアの機能美と洗練を兼ね備え、フィールドに立つ者の姿をより美しく引き立てる。\nシンプルでありながら、記憶に残る。そんな一着である。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\n練習や大会で着る以外では、パジャマや部屋着として一軍をキープしている。他のパジャマには申し訳ないが、このパジャマ...おっと、このユニフォームを着れば睡眠の質が段違いに最高級になる。堀大輔も30分睡眠では済まないだろう。",

    size: {

  type: "long-shirt",

  measurements: [
    {
      key: "A",
      label: "胸囲（周囲）"
    },
    {
      key: "B",
      label: "着丈"
    },
    {
      key: "C",
      label: "袖丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B",
    "C"
  ],

  rows: [
    ["XS", "91.5", "68.5", "58.5"],
    ["S", "96.5", "71.0", "61.0"],
    ["M", "101.5", "74.0", "62.0"],
    ["L", "106.5", "76.0", "64.5"],
    ["XL", "111.5", "79.0", "66.0"],
    ["2XL", "116.5", "81.0", "67.0"]
  ],

  unit: "cm"

},

    reviews: [
      {
    name: "川尻堀大輔[#18/30min]",
    rating: 1,
    comment: "寝巻としては悪くないけど、睡眠改善は感じられなかった。"
  },
      {
    name: "小松優之介[#25]",
    rating: 5,
    comment: "もっと早く作っていれば絶対欲しかった。"
  },
  {
    name: "小野寺李和[#2]",
    rating: 5,
    comment: "他大とのユニ交換とかにもいい"
  },
  {
    name: "金谷柊飛[#0]",
    rating: 5,
    comment: "俺のファーストキスは2年の冬。\n小松優之介に宇都宮で奪われた。"
  },
  {
    name: "三次賢人[#79]",
    rating: 5,
    comment: "金谷の初キスどわーw"
  }
    ]

  },


  /* ========================================
     白ユニ 長袖
  ======================================== */

  "white-long": {

    name: "白ユニ 長袖",

    required: false,

    price: "¥5500",

    images: [
      "images/uniforms/white_long1.png",
      "images/uniforms/white_long2.png",
      "images/uniforms/white_long3.png",
      "images/uniforms/white_long4.png",
      "images/uniforms/white_long5.png",
      "images/uniforms/white_long6.png",
      "images/uniforms/white_long7.png",
      "images/uniforms/white_long8.png"
    ],

    design:
      "無垢なホワイトを基調に、ネイビーとゴールドのラインを施した、清潔感と品格を感じさせる一着。\n無駄を削ぎ落としたミニマルなデザインでありながら、胸元のロゴと袖のディテールが確かな存在感を演出する。\n凛とした美しさを纏う、洗練されたゲームウェアだ。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nこれむっちゃリアルっすね。\nなんでかっていうと、長袖を一番上に来てるってだけで体感3割増しくらいうまそうに見えるからっすね。そこに帽子、そこにネックチューブ、木とサングラスで魔法陣完成。せーの、間違い。",

    size: {

  type: "long-shirt",

  measurements: [
    {
      key: "A",
      label: "胸囲（周囲）"
    },
    {
      key: "B",
      label: "着丈"
    },
    {
      key: "C",
      label: "袖丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B",
    "C"
  ],

  rows: [
    ["XS", "91.5", "68.5", "58.5"],
    ["S", "96.5", "71.0", "61.0"],
    ["M", "101.5", "74.0", "62.0"],
    ["L", "106.5", "76.0", "64.5"],
    ["XL", "111.5", "79.0", "66.0"],
    ["2XL", "116.5", "81.0", "67.0"]
  ],

  unit: "cm"

},

    reviews: [
      {
    name: "小松優之介[#25]",
    rating: 5,
    comment: "猛者感を出したければ白の長袖を買っとけば間違いない。"
  },
  {
    name: "川中日翔[#90]",
    rating: 5,
    comment: "ワンサイズ大きくして少し萌え袖で着て、パンツは膝出すくらいがかっこいい。"
  }
    ]

  },


  /* ========================================
     黒金 長袖
  ======================================== */

  "black-long": {

    name: "黒金 長袖",

    required: false,

    price: "¥5500",

    images: [
      "images/uniforms/black_long1.png",
      "images/uniforms/black_long2.png",
      "images/uniforms/black_long3.png",
      "images/uniforms/black_long4.png",
      "images/uniforms/black_long5.png",
      "images/uniforms/black_long6.png",
      "images/uniforms/black_long7.png",
      "images/uniforms/black_long8.png"
    ],

    design:
      "漆黒を纏うことで、ユニフォーム全体に静かな威圧感を与えた一着。\nゴールドが鮮やかに浮かび上がり、シンプルでありながらひと際目を引く存在感を放つ。\n力強さを前面に出しながらも、洗練されたカラーリングによって品格を失わない。「強さ」と「美しさ」を同時に纏う一着である。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nかの有名デザイナー、RENJI SHIMOYAMAが手掛けた一着。\nなんとなーくで作ってみた練習着がまさかの大盛況。\nまさかここまで人気になり、何度も発注する羽目になるとは思っていなかった。\nこれを気に入ってる人も多いのだろうが、エンブレムはチャッピーが作ったって知らないんだろうな。\nそうとも知らず着てるアホども草なんよ。どわーw",

    size: {

  type: "long-shirt",

  measurements: [
    {
      key: "A",
      label: "胸囲（周囲）"
    },
    {
      key: "B",
      label: "着丈"
    },
    {
      key: "C",
      label: "袖丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B",
    "C"
  ],

  rows: [
    ["XS", "91.5", "68.5", "58.5"],
    ["S", "96.5", "71.0", "61.0"],
    ["M", "101.5", "74.0", "62.0"],
    ["L", "106.5", "76.0", "64.5"],
    ["XL", "111.5", "79.0", "66.0"],
    ["2XL", "116.5", "81.0", "67.0"]
  ],

  unit: "cm"

},

    reviews: [
      {
    name: "秋山晴樹[#10]",
    rating: 5,
    comment: "バックに背番号がデザインされていないため、移動やジムなどでも使いやすい"
  },
  {
    name: "下山田蓮治[#12]",
    rating: 5,
    comment: "俺が考えたんだからかっこいいに決まってる"
  }
    ]

  },


  /* ========================================
     スリーブレス
  ======================================== */

  "sleeveless": {

    name: "黒ピンク スリーブレス",

    required: false,

    price: "¥4100",

    images: [
      "images/uniforms/sleeveless1.png",
      "images/uniforms/sleeveless2.png",
      "images/uniforms/sleeveless3.png",
      "images/uniforms/sleeveless4.png",
      "images/uniforms/sleeveless5.png",
      "images/uniforms/sleeveless6.png",
      "images/uniforms/sleeveless7.png",
      "images/uniforms/sleeveless8.png"
    ],

    design:
      "黒をベースに、幾何学模様を織り込んだグラフィックと鮮やかなピンクのラインを組み合わせることでモダンで個性的な仕上がりを実現。\nフロントには選手番号とエンブレム、バックには大胆な背番号と「JAVELINAUTS」を配し、前後で異なる表情を楽しめるデザインに仕上げている。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nRENJI SHIMOYAMAが初めて手掛けた思い出の一作。\nジャベの練習着の原点は全てここにあるといっても過言ではない。\nadidasみたい？\n君のような勘のいい餓鬼は嫌いだよ。",

    size: {

  type: "sleeveless",

  measurements: [
    {
      key: "A",
      label: "身幅"
    },
    {
      key: "B",
      label: "着丈"
    }
  ],

  groups: [

    {
      name: "MEN'S",

      headers: [
        "サイズ",
        "A",
        "B"
      ],

      rows: [
        ["XS", "48.3", "67.3"],
        ["S", "50.8", "69.9"],
        ["M", "53.3", "72.4"],
        ["L", "55.9", "74.9"],
        ["XL", "58.4", "77.5"],
        ["2XL", "61.0", "80.0"],
        ["3XL", "63.5", "82.6"],
        ["4XL", "66.0", "85.1"]
      ]
    },

    {
      name: "WOMEN'S",

      headers: [
        "サイズ",
        "A",
        "B"
      ],

      rows: [
        ["XS", "43.2", "62.2"],
        ["S", "45.7", "64.8"],
        ["M", "48.3", "67.3"],
        ["L", "50.8", "69.9"],
        ["XL", "53.3", "72.4"],
        ["2XL", "55.9", "74.9"]
      ]
    }

  ],

  unit: "cm",

  note:
    "メーカー表記（inch）をcmに換算し、小数第1位に丸めています。"

},

    reviews: [
      {
    name: "成井佳貴[#6]",
    rating: 4,
    comment: "嫌いじゃない"
  },
  {
    name: "小野寺李和[#2]",
    rating: 5,
    comment: "好きって言え"
  },
  {
    name: "末木陽[#16]",
    rating: 5,
    comment: "一番尊敬している先輩にもらった"
  },
    ]

  },

  /* ========================================
     黒ピンク 長袖
  ======================================== */

  "black-pink-long": {

    name: "黒ピンク 長袖",

    required: false,

    price: "¥5500",

    images: [
  "images/uniforms/black_pink_long1.png",
  "images/uniforms/black_pink_long2.png",
  "images/uniforms/black_pink_long3.png",
  "images/uniforms/black_pink_long4.png",
  "images/uniforms/black_pink_long5.png",
  "images/uniforms/black_pink_long6.png",
  "images/uniforms/black_pink_long7.png",
  "images/uniforms/black_pink_long8.png"
],

    design:
      "黒をベースに、幾何学模様を織り込んだグラフィックと鮮やかなピンクのラインを組み合わせることでモダンで個性的な仕上がりを実現。\nフロントには選手番号とエンブレム、バックには大胆な背番号と「JAVELINAUTS」を配し、前後で異なる表情を楽しめるデザインに仕上げている。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nなぜ笑うんだい？\nRENJI SHIMOYAMAのデザインは上手だよ。",

    size: {

  type: "long-shirt",

  measurements: [
    {
      key: "A",
      label: "胸囲（周囲）"
    },
    {
      key: "B",
      label: "着丈"
    },
    {
      key: "C",
      label: "袖丈"
    }
  ],

  headers: [
    "サイズ",
    "A",
    "B",
    "C"
  ],

  rows: [
    ["XS", "91.5", "68.5", "58.5"],
    ["S", "96.5", "71.0", "61.0"],
    ["M", "101.5", "74.0", "62.0"],
    ["L", "106.5", "76.0", "64.5"],
    ["XL", "111.5", "79.0", "66.0"],
    ["2XL", "116.5", "81.0", "67.0"]
  ],

  unit: "cm"

},

    reviews: [
      {
    name: "成井佳貴[#6]",
    rating: 4,
    comment: "嫌いじゃない"
  },
  {
    name: "小野寺李和[#2]",
    rating: 5,
    comment: "だから好きって言えよ"
  },
  {
    name: "金谷柊飛[#0]",
    rating: 5,
    comment: "人生でセカンドキスは下山田蓮治。宇都宮の地にて奪われた。以降2人を雄として認識するようになり告白したところ、どちらからも振られてしまった。思わせぶりは良くないと思う。"
  },
  {
    name: "野下颯悟[#21]",
    rating: 5,
    comment: "うおw"
  }
    ]

  },


  /* ========================================
     タンクトップ
  ======================================== */

  "tanktop": {

    name: "黒金 スリーブレス",

    required: false,

    price: "¥4100",

    images: [
  "images/uniforms/black_gold_sleeveless1.png",
  "images/uniforms/black_gold_sleeveless2.png",
  "images/uniforms/black_gold_sleeveless3.png",
  "images/uniforms/black_gold_sleeveless4.png",
  "images/uniforms/black_gold_sleeveless5.png",
  "images/uniforms/black_gold_sleeveless6.png",
  "images/uniforms/black_gold_sleeveless7.png",
  "images/uniforms/black_gold_sleeveless8.png"
],

    design:
      "漆黒を纏うことで、ユニフォーム全体に静かな威圧感を与えた一着。\nゴールドが鮮やかに浮かび上がり、シンプルでありながらひと際目を引く存在感を放つ。\n力強さを前面に出しながらも、洗練されたカラーリングによって品格を失わない。「強さ」と「美しさ」を同時に纏う一着である。",

    material:
  "ポリエステル100％\n\n軽量性と耐久性を兼ね備え、競技のために選び抜かれた素材。激しい動きにも追従し、快適な着用感を実現する。\n\nチームの筋肉担当が我こそはとこぞって着用する姿は、羽を広げる孔雀のの姿を想起させる。\nもっと肩の布面積が少ないタンクトップにも対応しているため、ぜひとも購入して身を包んでほしい。",

    size: {

  type: "sleeveless",

  measurements: [
    {
      key: "A",
      label: "身幅"
    },
    {
      key: "B",
      label: "着丈"
    }
  ],

  groups: [

    {
      name: "MEN'S",

      headers: [
        "サイズ",
        "A",
        "B"
      ],

      rows: [
        ["XS", "48.3", "67.3"],
        ["S", "50.8", "69.9"],
        ["M", "53.3", "72.4"],
        ["L", "55.9", "74.9"],
        ["XL", "58.4", "77.5"],
        ["2XL", "61.0", "80.0"],
        ["3XL", "63.5", "82.6"],
        ["4XL", "66.0", "85.1"]
      ]
    },

    {
      name: "WOMEN'S",

      headers: [
        "サイズ",
        "A",
        "B"
      ],

      rows: [
        ["XS", "43.2", "62.2"],
        ["S", "45.7", "64.8"],
        ["M", "48.3", "67.3"],
        ["L", "50.8", "69.9"],
        ["XL", "53.3", "72.4"],
        ["2XL", "55.9", "74.9"]
      ]
    }

  ],

  unit: "cm",

  note:
    "メーカー表記（inch）をcmに換算し、小数第1位に丸めています。"

},

    reviews: [
      {
    name: "秋山晴樹[#10]",
    rating: 5,
    comment: "俺が一番よく似合う"
  },
  {
    name: "森雄作[#5]",
    rating: 5,
    comment: "いや、俺が一番だな。買わない理由がない。"
  },
  {
    name: "野下颯悟[#21]",
    rating: 2,
    comment: "筋肉がないと着てはいけないのですか？細身の人間は着るなとでも言いたいのですか？あまり適当なことをぬかさないでいただきたいです。今後同じような言動が見受けられるようでしたら、弁護士を雇って訴訟いたします。"
  },
  {
    name: "小松優之介[#25]",
    rating: 4,
    comment: "勘弁してください"
  },
    ]

  },


  /* ========================================
     ジャベパ
  ======================================== */

  "javepa": {

    name: "ジャベパ",

    required: false,

    price: "上下セット　¥7,500\n上のみ　　　¥3,900\n下のみ　　　¥3,600",

    images: [
      "images/uniforms/javepa1.png",
      "images/uniforms/javepa2.png",
      "images/uniforms/javepa3.png",
      "images/uniforms/javepa4.png",
      "images/uniforms/javepa5.png",
      "images/uniforms/javepa6.png",
      "images/uniforms/javepa7.png",
      "images/uniforms/javepa8.png",
      "images/uniforms/javepa9.png",
      "images/uniforms/javepa10.png"
    ],

    design:
      "東洋大学のイメージカラーである「鉄紺」を基調に仕立てたセットアップ。\nフロントには東洋大学を象徴するロゴを配し、背面にはディスクを追うプレイヤーのシルエットとチームスローガンである「win by all nauts」（全員の力で勝利を掴む）のメッセージを大胆にプリント。\n\nネイビーとホワイト、杢グレーのコントラストがクラシックなカレッジウェアの趣を演出しながら、袖やパンツに配されたナンバーがチームウェアとしての個性を添えている。大学の誇りとチームのスピリットを日常に落とし込んだ、JAVELINAUTSを象徴するセットアップである。",

    material:
  "綿60％、ポリエステル40％\n\n綿がもたらす柔らかな肌触りと、ポリエステルの機能性を融合した素材構成。自然な着心地と軽快な動きやすさを両立し、日常からフィールドまで幅広く対応する。\n\n\n鉄紺の　衣に宿る　友の色　来し方重ね　行く末ぞ思ふ\n\n（現代語訳）\n鉄紺の衣に宿る、仲間たちの色。これまで歩んできた時間を積み重ねながら、これから先の未来に思いを馳せる。\n\n（解説）\n「鉄紺の衣に宿る友の色」は、東洋大学を象徴する鉄紺と、そこに集う仲間一人ひとりの個性や思いを重ねた表現である。「衣に宿る」とすることで単なる服ではなく、JAVELINAUTSで過ごした時間や仲間との記憶を身に纏うものとして描いている。また、「色」は実際の鉄紺の色を指すと同時に、それぞれ異なる個性や存在を表す掛け言葉的な役割を持つ。「来し方」は「着し」を表現すると同時にこれまで歩んできた日々を、「行く末」はこれから先の未来を意味し、過去から現在、そして未来へと続くチームの歩みを表現している。これまで仲間と積み重ねてきた時間を胸に、同じ衣を纏いながら、これからも共に未来へ進んでいく。そんな歴史と絆を込めた歌である。",

    size: {

  type: "javepa",

  sections: [

    {
      name: "TOPS",
      label: "ジャベパ 上",
      diagram: "hoodie",

      measurements: [
        {
          key: "着丈",
          label: "着丈"
        },
        {
          key: "身幅",
          label: "身幅"
        },
        {
          key: "肩幅",
          label: "肩幅"
        },
        {
          key: "袖丈",
          label: "袖丈"
        }
      ],

      headers: [
        "サイズ",
        "着丈",
        "身幅",
        "肩幅",
        "袖丈"
      ],

      rows: [
        ["S", "64", "54", "46", "61"],
        ["M", "67", "57", "49", "62"],
        ["L", "70", "60", "52", "63"],
        ["XL", "73", "63", "55", "64"],
        ["2XL", "76", "66", "58", "65"],
        ["3XL", "79", "69", "61", "66"],
        ["4XL", "82", "72", "64", "67"],
        ["5XL", "85", "75", "67", "68"],
        ["JS/110", "49", "38", "33", "41"],
        ["JM/130", "56", "45", "40", "49"],
        ["JL/150", "60", "49", "43", "56"]
      ]
    },

    {
      name: "BOTTOMS",
      label: "ジャベパ 下",
      diagram: "sweatpants",

      measurements: [
        {
          key: "総丈",
          label: "総丈"
        },
        {
          key: "ウエスト",
          label: "ウエスト"
        },
        {
          key: "股下",
          label: "股下"
        }
      ],

      headers: [
        "サイズ",
        "総丈",
        "ウエスト",
        "股下"
      ],

      rows: [
        ["XS", "98", "64〜72", "72"],
        ["S", "100", "70〜78", "75"],
        ["M", "104", "74〜82", "77"],
        ["L", "108", "77〜85", "78"],
        ["XL", "112", "80〜88", "80"],
        ["XXL", "114", "83〜91", "82"],
        ["XXXL", "116", "88〜100", "82"]
      ]
    }

  ],

  unit: "cm"

},

    reviews: [
      {
    name: "小松優之介[#25]",
    rating: 5,
    comment: "飲み会で最大限の力を発揮してくれると感じました。とても気に入ってます。"
  },
  {
    name: "下山田蓮治[#12]",
    rating: 3,
    comment: "買ったその冬でお股に穴空いた。\nママが縫ってくれた。"
  },
  {
    name: "川中日翔[#90]",
    rating: 5,
    comment: "パジャマにちょうど良すぎて困っている。\nそのまま家出れるし。"
  },
  {
    name: "成井佳貴[#6]",
    rating: 5,
    comment: "ここだけの話、女子がジャベパ着ると可愛すぎて目をみて話せなくなります"
  }
  
    ]

  }

};


