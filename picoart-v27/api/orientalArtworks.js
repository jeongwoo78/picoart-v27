// PicoArt v27 - 동양화 작품 데이터베이스
// AI가 사용자 사진을 분석하여 최적의 작품을 자동 선택

export const chineseArtworks = [
  {
    id: 'chinese_01',
    filename: 'chinese_01_thousand_li.jpg',
    title: '천리강산도',
    artist: '왕희맹',
    style: 'blue_green_landscape',
    category: 'landscape',
    technique: 'gongbi',
    characteristics: [
      'blue and green mineral pigments',
      'grand panoramic landscape',
      'detailed mountains and rivers',
      'golden aged paper background',
      'imperial court painting style',
      'meticulous detailed brushwork'
    ],
    subjects: ['mountains', 'rivers', 'nature', 'landscape'],
    colors: ['blue', 'green', 'gold', 'earth tones'],
    mood: 'majestic and serene',
    prompt: 'Chinese blue-green landscape painting (Qinglu Shanshui) style by Wang Ximeng, grand panoramic mountains and rivers, brilliant blue and green mineral pigments, golden aged paper, meticulous detailed gongbi technique, imperial court painting quality, majestic serene atmosphere'
  },
  {
    id: 'chinese_02',
    filename: 'chinese_02_court_ladies.jpg',
    title: '궁녀도',
    artist: '주방',
    style: 'figure_gongbi',
    category: 'figure',
    technique: 'gongbi',
    characteristics: [
      'elegant female figures',
      'delicate facial features',
      'flowing robes and drapery',
      'fine detailed brushwork',
      'soft harmonious colors',
      'court painting style'
    ],
    subjects: ['people', 'women', 'portraits', 'court life'],
    colors: ['soft pastels', 'earth tones', 'gentle colors'],
    mood: 'elegant and graceful',
    prompt: 'Chinese gongbi court ladies painting style, elegant graceful female figures, delicate fine facial features, flowing robes, soft harmonious colors, extremely detailed brushwork, refined imperial court painting quality'
  },
  {
    id: 'chinese_03',
    filename: 'chinese_03_shrimps.jpg',
    title: '새우',
    artist: '제백석',
    style: 'ink_wash_creatures',
    category: 'creatures',
    technique: 'ink_wash',
    characteristics: [
      'spontaneous ink wash',
      'minimalist composition',
      'lively movement',
      'expressive brushstrokes',
      'monochrome ink variations',
      'modern Chinese painting'
    ],
    subjects: ['animals', 'aquatic life', 'nature'],
    colors: ['black ink', 'grey tones', 'white space'],
    mood: 'lively and spontaneous',
    prompt: 'Chinese ink wash painting (Shuimohua) style by Qi Baishi, spontaneous expressive brushwork, lively movement, monochrome black ink gradations, minimalist composition with elegant empty space, modern Chinese literati painting quality'
  },
  {
    id: 'chinese_04',
    filename: 'chinese_04_grapes.jpg',
    title: '포도',
    artist: '서위',
    style: 'ink_wash_fruit',
    category: 'flowers_birds',
    technique: 'ink_wash',
    characteristics: [
      'bold ink wash technique',
      'expressive brushwork',
      'hanging fruits composition',
      'monochrome ink',
      'literati painting style',
      'spontaneous and free'
    ],
    subjects: ['fruits', 'plants', 'nature'],
    colors: ['black ink', 'grey washes'],
    mood: 'bold and expressive',
    prompt: 'Chinese ink wash painting style by Xu Wei, bold expressive brushwork, hanging fruits composition, monochrome black ink with varied grey washes, spontaneous free-spirited literati painting, dynamic brushstrokes'
  },
  {
    id: 'chinese_05',
    filename: 'chinese_05_chrysanthemum.jpg',
    title: '국화',
    artist: '왕무',
    style: 'gongbi_flowers',
    category: 'flowers_birds',
    technique: 'gongbi',
    characteristics: [
      'detailed flower petals',
      'delicate color application',
      'meticulous brushwork',
      'decorative composition',
      'rich colors',
      'traditional flower painting'
    ],
    subjects: ['flowers', 'chrysanthemums', 'plants'],
    colors: ['vibrant colors', 'rich pigments'],
    mood: 'refined and decorative',
    prompt: 'Chinese gongbi flower painting style, detailed chrysanthemum petals, delicate fine brushwork, rich vibrant colors, decorative composition, traditional Chinese flower bird painting (Huaniao), meticulous imperial quality'
  },
  {
    id: 'chinese_06',
    filename: 'chinese_06_plum.jpg',
    title: '매화',
    artist: '왕면',
    style: 'ink_plum',
    category: 'flowers_birds',
    technique: 'ink_wash',
    characteristics: [
      'ink plum blossoms',
      'twisted branches',
      'spontaneous brushwork',
      'monochrome elegance',
      'literati painting',
      'symbolic meaning'
    ],
    subjects: ['plum blossoms', 'flowers', 'branches'],
    colors: ['black ink', 'white space'],
    mood: 'elegant and resilient',
    prompt: 'Chinese ink plum blossom painting style, twisted elegant branches, spontaneous expressive brushwork, monochrome black ink, literati painting aesthetic, symbolic resilient spirit, classical Chinese painting quality'
  },
  {
    id: 'chinese_07',
    filename: 'chinese_07_fish.jpg',
    title: '물고기',
    artist: '팔대산인',
    style: 'ink_fish',
    category: 'creatures',
    technique: 'ink_wash',
    characteristics: [
      'bold simplified forms',
      'expressive eyes',
      'minimalist composition',
      'eccentric style',
      'spontaneous ink',
      'unique personality'
    ],
    subjects: ['fish', 'aquatic life', 'animals'],
    colors: ['black ink', 'white space'],
    mood: 'bold and eccentric',
    prompt: 'Chinese ink wash painting by Bada Shanren, bold simplified fish forms, expressive characteristic eyes, minimalist composition, eccentric unique style, spontaneous powerful brushwork, individual artistic personality'
  },
  {
    id: 'chinese_08',
    filename: 'chinese_08_autumn.jpg',
    title: '가을 산수',
    artist: '동원',
    style: 'ink_landscape',
    category: 'landscape',
    technique: 'ink_wash',
    characteristics: [
      'misty mountains',
      'soft ink washes',
      'atmospheric perspective',
      'poetic mood',
      'monochrome landscape',
      'classical literati style'
    ],
    subjects: ['mountains', 'trees', 'landscape', 'nature'],
    colors: ['black ink', 'grey washes', 'white space'],
    mood: 'misty and poetic',
    prompt: 'Chinese ink wash landscape painting (Shanshui) style, misty atmospheric mountains, soft flowing ink washes, poetic serene mood, classical literati painting aesthetic, monochrome with elegant empty space, meditative quality'
  },
  {
    id: 'chinese_09',
    filename: 'chinese_09_beauty.jpg',
    title: '미인도',
    artist: '당인',
    style: 'figure_gongbi',
    category: 'figure',
    technique: 'gongbi',
    characteristics: [
      'elegant female beauty',
      'detailed facial features',
      'fine silk texture',
      'soft colors',
      'graceful posture',
      'refined court style'
    ],
    subjects: ['women', 'portraits', 'beauty'],
    colors: ['soft colors', 'pastels', 'earth tones'],
    mood: 'elegant and refined',
    prompt: 'Chinese gongbi beauty portrait style, elegant refined female figure, delicate detailed facial features, soft harmonious colors, fine silk texture rendering, graceful posture, traditional Chinese beauty painting quality'
  },
  {
    id: 'chinese_10',
    filename: 'chinese_10_lotus_pond.jpg',
    title: '연못',
    artist: '장대천',
    style: 'splash_ink_landscape',
    category: 'landscape',
    technique: 'splash_ink',
    characteristics: [
      'bold splash ink technique',
      'vibrant colors',
      'abstract expressiveness',
      'modern Chinese painting',
      'lotus flowers',
      'dynamic composition'
    ],
    subjects: ['lotus', 'pond', 'water', 'flowers'],
    colors: ['vibrant colors', 'bold ink', 'rich pigments'],
    mood: 'bold and vibrant',
    prompt: 'Chinese splash ink lotus pond painting style by Zhang Daqian, bold splashing ink technique, vibrant rich colors, abstract expressiveness, modern Chinese painting style, dynamic composition, lotus flowers and water'
  },
  {
    id: 'chinese_11',
    filename: 'chinese_11_bamboo.jpg',
    title: '대나무',
    artist: '정섭',
    style: 'ink_bamboo',
    category: 'flowers_birds',
    technique: 'ink_wash',
    characteristics: [
      'bamboo stalks and leaves',
      'bold brushstrokes',
      'monochrome ink',
      'literati symbolism',
      'expressive technique',
      'scholarly painting'
    ],
    subjects: ['bamboo', 'plants', 'nature'],
    colors: ['black ink', 'grey tones'],
    mood: 'strong and upright',
    prompt: 'Chinese ink bamboo painting style by Zheng Xie, bold expressive brushstrokes, monochrome black ink, bamboo stalks and leaves, literati scholarly painting, symbolic of integrity and resilience, classical quality'
  },
  {
    id: 'chinese_12',
    filename: 'chinese_12_night_revels.jpg',
    title: '야연도',
    artist: '고굉중',
    style: 'narrative_gongbi',
    category: 'figure',
    technique: 'gongbi',
    characteristics: [
      'narrative scene',
      'multiple figures',
      'court entertainment',
      'detailed architecture',
      'rich colors',
      'storytelling composition'
    ],
    subjects: ['people', 'court life', 'entertainment', 'architecture'],
    colors: ['rich colors', 'gold', 'vibrant pigments'],
    mood: 'festive and narrative',
    prompt: 'Chinese gongbi narrative painting style by Gu Hongzhong, detailed court scene with multiple figures, rich vibrant colors, meticulous brushwork, architectural details, storytelling composition, imperial court painting quality'
  },
  {
    id: 'chinese_13',
    filename: 'chinese_13_bird.jpg',
    title: '새',
    artist: '황전',
    style: 'gongbi_bird',
    category: 'flowers_birds',
    technique: 'gongbi',
    characteristics: [
      'detailed bird feathers',
      'precise brushwork',
      'naturalistic rendering',
      'delicate colors',
      'flower-bird composition',
      'decorative elegance'
    ],
    subjects: ['birds', 'flowers', 'nature'],
    colors: ['natural colors', 'delicate pigments'],
    mood: 'delicate and naturalistic',
    prompt: 'Chinese gongbi bird and flower painting style, detailed naturalistic bird feathers, precise meticulous brushwork, delicate soft colors, traditional flower-bird painting (Huaniao), decorative elegant composition, imperial quality'
  },
  {
    id: 'chinese_14',
    filename: 'chinese_14_scholar.jpg',
    title: '선비',
    artist: '문징명',
    style: 'scholar_portrait',
    category: 'figure',
    technique: 'gongbi',
    characteristics: [
      'scholarly figure',
      'traditional robes',
      'refined posture',
      'studio setting',
      'literati aesthetic',
      'intellectual atmosphere'
    ],
    subjects: ['scholar', 'people', 'portrait', 'study'],
    colors: ['subtle colors', 'earth tones'],
    mood: 'contemplative and refined',
    prompt: 'Chinese literati scholar portrait painting style, refined scholarly figure in traditional robes, contemplative intellectual atmosphere, subtle earth tone colors, meticulous brushwork, literati painting aesthetic, classical quality'
  },
  {
    id: 'chinese_15',
    filename: 'chinese_15_horses.jpg',
    title: '말',
    artist: '서비홍',
    style: 'ink_horses',
    category: 'creatures',
    technique: 'ink_wash',
    characteristics: [
      'dynamic horse movement',
      'bold ink strokes',
      'modern Chinese style',
      'expressive energy',
      'monochrome power',
      'contemporary aesthetic'
    ],
    subjects: ['horses', 'animals', 'movement'],
    colors: ['black ink', 'white space'],
    mood: 'powerful and dynamic',
    prompt: 'Chinese ink wash horse painting style by Xu Beihong, dynamic powerful movement, bold expressive brushstrokes, monochrome black ink, modern Chinese painting style, energetic composition, contemporary ink painting quality'
  }
];

export const koreanArtworks = [
  {
    id: 'korean_01',
    filename: 'korean_01_jeong_inwang.jpg',
    title: '인왕제색도',
    artist: '정선',
    style: 'true_view_landscape',
    category: 'landscape',
    technique: 'ink_wash',
    characteristics: [
      'bold rocky mountains',
      'powerful brushwork',
      'Korean scenery',
      'monochrome ink',
      'true-view landscape',
      'dramatic composition'
    ],
    subjects: ['mountains', 'rocks', 'landscape', 'nature'],
    colors: ['black ink', 'grey washes'],
    mood: 'powerful and dramatic',
    prompt: 'Korean true-view landscape painting (Jingyeong Sansu) style by Jeong Seon, bold powerful rocky mountains, dramatic expressive brushwork, monochrome black ink washes, authentic Korean scenery, dynamic composition, masterpiece quality'
  },
  {
    id: 'korean_02',
    filename: 'korean_02_shin_beauty.jpg',
    title: '미인도',
    artist: '신윤복',
    style: 'genre_figure',
    category: 'figure',
    technique: 'color_painting',
    characteristics: [
      'elegant female figure',
      'delicate lines',
      'soft colors',
      'Korean beauty ideal',
      'graceful posture',
      'refined composition'
    ],
    subjects: ['women', 'beauty', 'portraits'],
    colors: ['soft pastels', 'gentle colors'],
    mood: 'elegant and graceful',
    prompt: 'Korean beauty portrait painting by Shin Yunbok, elegant graceful female figure, delicate fine lines, soft gentle colors, Korean traditional beauty aesthetic, refined composition, Joseon Dynasty painting quality'
  },
  {
    id: 'korean_03',
    filename: 'korean_03_kim_study.jpg',
    title: '서재',
    artist: '김홍도',
    style: 'scholar_life',
    category: 'figure',
    technique: 'color_painting',
    characteristics: [
      'scholarly scene',
      'architectural detail',
      'human figures',
      'everyday life',
      'warm colors',
      'narrative composition'
    ],
    subjects: ['scholar', 'study', 'architecture', 'daily life'],
    colors: ['warm earth tones', 'natural colors'],
    mood: 'peaceful and scholarly',
    prompt: 'Korean scholar life painting by Kim Hongdo, peaceful scholarly scene, architectural details, warm natural colors, narrative composition, everyday life depiction, Joseon Dynasty genre painting quality'
  },
  {
    id: 'korean_04',
    filename: 'korean_04_tiger_magpie.jpg',
    title: '까치호랑이',
    artist: '민화',
    style: 'folk_minhwa',
    category: 'folk',
    technique: 'folk_painting',
    characteristics: [
      'bold outlines',
      'vibrant colors',
      'humorous expression',
      'folk aesthetics',
      'protective symbolism',
      'decorative pattern'
    ],
    subjects: ['tiger', 'magpie', 'animals', 'folk art'],
    colors: ['bright colors', 'bold black outlines'],
    mood: 'cheerful and protective',
    prompt: 'Korean folk painting (Minhwa) style, bold black outlines, vibrant bright colors from five Korean colors (Obangsaek), humorous cheerful tiger and magpie, flat decorative composition, naive playful folk aesthetic, traditional Korean minhwa masterpiece'
  },
  {
    id: 'korean_05',
    filename: 'korean_05_peony_birds.jpg',
    title: '모란도',
    artist: '민화',
    style: 'folk_flowers',
    category: 'flowers_birds',
    technique: 'folk_painting',
    characteristics: [
      'peony flowers',
      'decorative birds',
      'rich colors',
      'folk symbolism',
      'prosperity wish',
      'ornate composition'
    ],
    subjects: ['peony', 'birds', 'flowers'],
    colors: ['rich vibrant colors', 'decorative'],
    mood: 'prosperous and joyful',
    prompt: 'Korean folk peony painting (Minhwa) style, rich vibrant peony flowers, decorative birds, bold colors, flat ornate composition, prosperity symbolism, traditional Korean folk art quality'
  },
  {
    id: 'korean_06',
    filename: 'korean_06_chaekgeori.jpg',
    title: '책거리',
    artist: '민화',
    style: 'folk_still_life',
    category: 'folk',
    technique: 'folk_painting',
    characteristics: [
      'books and scholar objects',
      'illusionistic shelves',
      'rich colors',
      'decorative arrangement',
      'scholarly symbolism',
      'folk interpretation'
    ],
    subjects: ['books', 'scholar objects', 'still life'],
    colors: ['vibrant colors', 'decorative'],
    mood: 'scholarly and decorative',
    prompt: 'Korean Chaekgeori folk painting style, decorative books and scholar objects on shelves, vibrant rich colors, flat folk aesthetic, illusionistic composition, scholarly symbolism, traditional Korean minhwa quality'
  },
  {
    id: 'korean_07',
    filename: 'korean_07_fierce_tiger.jpg',
    title: '맹호도',
    artist: '민화',
    style: 'folk_tiger',
    category: 'folk',
    technique: 'folk_painting',
    characteristics: [
      'fierce tiger',
      'bold patterns',
      'protective symbolism',
      'strong colors',
      'folk power',
      'decorative stripes'
    ],
    subjects: ['tiger', 'animals', 'guardian'],
    colors: ['bold colors', 'strong contrasts'],
    mood: 'powerful and protective',
    prompt: 'Korean fierce tiger folk painting (Minhwa) style, powerful bold tiger with decorative stripes, strong vibrant colors, thick black outlines, protective guardian symbolism, flat folk composition, traditional Korean minhwa masterpiece'
  },
  {
    id: 'korean_08',
    filename: 'korean_08_geumgang.jpg',
    title: '금강전도',
    artist: '정선',
    style: 'true_view_landscape',
    category: 'landscape',
    technique: 'ink_wash',
    characteristics: [
      'famous Korean mountains',
      'bold composition',
      'powerful brushwork',
      'Korean identity',
      'dramatic peaks',
      'true-view style'
    ],
    subjects: ['mountains', 'landscape', 'nature'],
    colors: ['ink', 'subtle colors'],
    mood: 'majestic and powerful',
    prompt: 'Korean true-view landscape painting by Jeong Seon, majestic Geumgang mountain peaks, bold powerful brushwork, ink with subtle colors, dramatic composition, authentic Korean scenery, masterpiece quality'
  },
  {
    id: 'korean_09',
    filename: 'korean_09_lotus.jpg',
    title: '연화도',
    artist: '조선시대',
    style: 'flower_painting',
    category: 'flowers_birds',
    technique: 'color_painting',
    characteristics: [
      'lotus flowers',
      'graceful composition',
      'soft colors',
      'Buddhist symbolism',
      'elegant brushwork',
      'serene atmosphere'
    ],
    subjects: ['lotus', 'flowers', 'nature'],
    colors: ['soft colors', 'gentle tones'],
    mood: 'serene and pure',
    prompt: 'Korean lotus flower painting style, graceful elegant lotus blooms, soft gentle colors, delicate brushwork, serene pure atmosphere, Buddhist symbolism, Joseon Dynasty painting quality'
  },
  {
    id: 'korean_10',
    filename: 'korean_10_bluegreen.jpg',
    title: '청록산수',
    artist: '조선시대',
    style: 'blue_green_landscape',
    category: 'landscape',
    technique: 'color_painting',
    characteristics: [
      'blue-green pigments',
      'decorative landscape',
      'Korean interpretation',
      'mineral colors',
      'refined composition',
      'elegant style'
    ],
    subjects: ['mountains', 'landscape', 'nature'],
    colors: ['blue', 'green', 'gold'],
    mood: 'elegant and decorative',
    prompt: 'Korean blue-green landscape painting (Cheongrok Sansu) style, brilliant blue and green mineral pigments, decorative mountains and rivers, elegant Korean interpretation, refined composition, Joseon Dynasty masterpiece quality'
  },
  {
    id: 'korean_11',
    filename: 'korean_11_moonlight.jpg',
    title: '월하정인',
    artist: '신윤복',
    style: 'genre_romantic',
    category: 'figure',
    technique: 'color_painting',
    characteristics: [
      'romantic scene',
      'moonlit atmosphere',
      'elegant figures',
      'refined colors',
      'narrative mood',
      'delicate composition'
    ],
    subjects: ['people', 'romance', 'night scene'],
    colors: ['soft colors', 'moonlit tones'],
    mood: 'romantic and atmospheric',
    prompt: 'Korean romantic genre painting by Shin Yunbok, moonlit atmospheric scene, elegant figures, soft refined colors, delicate narrative composition, romantic mood, Joseon Dynasty painting quality'
  },
  {
    id: 'korean_12',
    filename: 'korean_12_reading_rest.jpg',
    title: '서당',
    artist: '김홍도',
    style: 'genre_education',
    category: 'figure',
    technique: 'color_painting',
    characteristics: [
      'educational scene',
      'multiple figures',
      'everyday life',
      'warm atmosphere',
      'narrative detail',
      'genre painting'
    ],
    subjects: ['education', 'children', 'daily life'],
    colors: ['warm natural tones'],
    mood: 'peaceful and educational',
    prompt: 'Korean educational scene genre painting by Kim Hongdo, peaceful learning atmosphere, multiple figures, warm natural colors, narrative details, everyday life depiction, Joseon Dynasty painting quality'
  },
  {
    id: 'korean_13',
    filename: 'korean_13_festival.jpg',
    title: '단오풍정',
    artist: '신윤복',
    style: 'genre_festival',
    category: 'figure',
    technique: 'color_painting',
    characteristics: [
      'festival scene',
      'women gathering',
      'vibrant atmosphere',
      'social interaction',
      'colorful clothing',
      'narrative composition'
    ],
    subjects: ['festival', 'people', 'celebration'],
    colors: ['vibrant colors', 'festive tones'],
    mood: 'joyful and festive',
    prompt: 'Korean festival scene genre painting by Shin Yunbok, joyful gathering of women, vibrant festive colors, colorful traditional clothing, narrative social interaction, Joseon Dynasty painting quality'
  },
  {
    id: 'korean_14',
    filename: 'korean_14_flowers_birds.jpg',
    title: '화조도',
    artist: '조선시대',
    style: 'flower_bird',
    category: 'flowers_birds',
    technique: 'color_painting',
    characteristics: [
      'flowers and birds',
      'harmonious composition',
      'natural colors',
      'elegant brushwork',
      'Korean aesthetic',
      'refined style'
    ],
    subjects: ['flowers', 'birds', 'nature'],
    colors: ['natural harmonious colors'],
    mood: 'harmonious and elegant',
    prompt: 'Korean flower and bird painting style, harmonious composition, natural elegant colors, refined delicate brushwork, Korean aesthetic sensibility, traditional painting quality'
  },
  {
    id: 'korean_15',
    filename: 'korean_15_wrestling.jpg',
    title: '씨름',
    artist: '김홍도',
    style: 'genre_sport',
    category: 'figure',
    technique: 'color_painting',
    characteristics: [
      'dynamic action',
      'crowd scene',
      'folk sport',
      'lively atmosphere',
      'human figures',
      'genre painting'
    ],
    subjects: ['sport', 'wrestling', 'people', 'entertainment'],
    colors: ['natural earth tones'],
    mood: 'lively and energetic',
    prompt: 'Korean wrestling scene genre painting by Kim Hongdo, dynamic action of Korean traditional wrestling (Ssireum), lively crowd atmosphere, natural earth tone colors, energetic composition, Joseon Dynasty painting quality'
  }
];
