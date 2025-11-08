// PicoArt v28.5 - 동양화 한국/중국 선택시 일본어 완전 금지
// Korean & Chinese art: 한자 허용, 일본 히라가나/가타카나 엄격 금지

// 동양화 DB
const chineseArtworks = [
  {id:'chinese_01',title:'천리강산도',artist:'왕희맹',subjects:['mountains','rivers','nature'],colors:['blue','green','gold'],mood:'majestic',style:'blue-green landscape',prompt:'Chinese blue-green landscape painting (Qinglu Shanshui) style by Wang Ximeng, grand panoramic mountains and rivers, brilliant blue and green mineral pigments, golden aged paper, meticulous detailed gongbi technique, imperial court painting quality, majestic serene atmosphere, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_02',title:'궁녀도',artist:'주방',subjects:['people','women','portraits'],colors:['soft pastels','earth tones'],mood:'elegant',style:'figure painting',prompt:'Chinese gongbi court ladies painting style, elegant graceful female figures, delicate fine facial features, flowing robes, soft harmonious colors, extremely detailed brushwork, refined imperial court painting quality, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_03',title:'새우',artist:'제백석',subjects:['animals','aquatic life'],colors:['black ink','grey'],mood:'lively',style:'ink wash',prompt:'Chinese ink wash painting (Shuimohua) style by Qi Baishi, spontaneous expressive brushwork, lively movement, monochrome black ink gradations, minimalist composition with elegant empty space, modern Chinese literati painting quality, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_06',title:'매화',artist:'왕면',subjects:['plum blossoms','flowers','branches'],colors:['black ink'],mood:'elegant',style:'ink plum',prompt:'Chinese ink plum blossom painting style, twisted elegant branches, spontaneous expressive brushwork, monochrome black ink, literati painting aesthetic, symbolic resilient spirit, classical Chinese painting quality, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_09',title:'미인도',artist:'당인',subjects:['women','portraits','beauty'],colors:['soft colors','pastels'],mood:'refined',style:'beauty portrait',prompt:'Chinese gongbi beauty portrait style, elegant refined female figure, delicate detailed facial features, soft harmonious colors, fine silk texture rendering, graceful posture, traditional Chinese beauty painting quality, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_11',title:'대나무',artist:'정섭',subjects:['bamboo','plants'],colors:['black ink','grey'],mood:'strong',style:'ink bamboo',prompt:'Chinese ink bamboo painting style by Zheng Xie, bold expressive brushstrokes, monochrome black ink, bamboo stalks and leaves, literati scholarly painting, symbolic of integrity and resilience, classical quality, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_13',title:'새',artist:'황전',subjects:['birds','flowers','nature'],colors:['natural colors'],mood:'delicate',style:'bird and flower',prompt:'Chinese gongbi bird and flower painting style, detailed naturalistic bird feathers, precise meticulous brushwork, delicate soft colors, traditional flower-bird painting (Huaniao), decorative elegant composition, imperial quality, Chinese characters allowed, NOT Korean style'},
  {id:'chinese_15',title:'말',artist:'서비홍',subjects:['horses','animals','movement'],colors:['black ink'],mood:'powerful',style:'ink horse',prompt:'Chinese ink wash horse painting style by Xu Beihong, dynamic powerful movement, bold expressive brushstrokes, monochrome black ink, modern Chinese painting style, energetic composition, contemporary ink painting quality, Chinese characters allowed, NOT Korean style'}
];

const koreanArtworks = [
  {id:'korean_01',title:'미인도',artist:'신윤복',subjects:['women','beauty','portraits'],colors:['soft pastels'],mood:'elegant',style:'beauty portrait',prompt:'Korean Hyewon Shin Yunbok Joseon Dynasty Pungsokdo genre painting beauty portrait, delicate refined brushwork showing elegant Korean woman in hanbok, soft pastel colors unique to Korean aesthetic, gentle contemplative expression, painted on hanji paper, KOREAN GENRE PAINTING not Chinese gongbi court ladies, absolutely NOT Japanese ukiyo-e bijinga, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_02',title:'까치호랑이',artist:'민화',subjects:['tiger','magpie','animals'],colors:['bright colors','bold outlines'],mood:'cheerful',style:'folk painting',prompt:'Korean Minhwa folk painting style, THICK BOLD BLACK OUTLINES around every shape (critical feature), BRIGHT PRIMARY colors from Obangsaek (red blue yellow white black), completely FLAT naive composition, childlike playful humorous tiger and magpie, painted by Korean common folk NOT professional artists, ABSOLUTELY NOT elegant Chinese painting, ABSOLUTELY NOT sophisticated Japanese ukiyo-e, this bold outline naive style is UNIQUELY KOREAN, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_03',title:'단오풍정',artist:'신윤복',subjects:['festival','people','celebration'],colors:['vibrant colors'],mood:'joyful',style:'genre painting',prompt:'Korean Hyewon Shin Yunbok Joseon Dynasty Pungsokdo genre painting, Dano festival scene with Korean women in colorful hanbok outdoors, vibrant festive atmosphere, narrative storytelling of Korean daily life, painted on hanji with mineral pigments, KOREAN GENRE PAINTING tradition unique to Joseon Korea, absolutely NOT Chinese court formality, absolutely NOT Japanese ukiyo-e entertainment, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_04',title:'월하정인',artist:'신윤복',subjects:['people','romance','night'],colors:['soft colors','moonlit tones'],mood:'romantic',style:'genre painting',prompt:'Korean Hyewon Shin Yunbok romantic moonlight Pungsokdo genre painting, Joseon Dynasty style, Korean figures in hanbok under moonlight, soft refined colors with ink washes, intimate romantic narrative, KOREAN ROMANTIC GENRE PAINTING tradition, absolutely NOT Chinese scholar painting, absolutely NOT Japanese ukiyo-e drama, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_05',title:'모란도',artist:'민화',subjects:['peony','birds','flowers'],colors:['rich vibrant colors'],mood:'prosperous',style:'folk flower',prompt:'Korean Minhwa folk painting PEONY flowers, PRESERVE photo composition, THICK BLACK OUTLINES around all shapes, BRIGHT PRIMARY colors from Obangsaek, completely FLAT decorative naive composition, prosperity symbolism, DISTINCTLY KOREAN MINHWA not refined Chinese Huaniao, absolutely NOT elegant Japanese flower prints, NO anime, NO added characters, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_06',title:'책거리',artist:'민화',subjects:['books','stationery','still life','scholar objects'],colors:['bright colors','colorful patterns'],mood:'scholarly',style:'folk still life',prompt:'Korean Minhwa Chaekgeori folk painting scholar objects still life, THICK BLACK OUTLINES, stacked books and objects, BRIGHT decorative colors, FLAT impossible perspective, geometric ornate patterns, uniquely KOREAN folk genre, ABSOLUTELY NOT Chinese scholar paintings, ABSOLUTELY NOT Japanese screens or byobu, this is PURELY KOREAN STYLE with Korean aesthetics, Chinese characters MAY appear on book spines only as text NOT as decorative element, STRICTLY NO Japanese hiragana katakana, NO Japanese decorative elements, NO Japanese artistic style'},
  {id:'korean_07',title:'맹호도',artist:'조선시대',subjects:['tiger','fierce','animal','pine tree'],colors:['black ink','brown','aged paper'],mood:'powerful',style:'realistic animal',prompt:'Korean Joseon Dynasty fierce tiger painting Maenghodo, realistic powerful Korean tiger under pine tree, detailed fur texture, monochrome ink with subtle brown on aged hanji, dignified guardian symbolism, bold expressive Korean brushwork, KOREAN TIGER PAINTING tradition, absolutely NOT Chinese decorative tigers, absolutely NOT Japanese stylized tigers, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_08',title:'인왕제색도',artist:'정선',subjects:['mountains','rocks','landscape'],colors:['black ink','grey'],mood:'powerful',style:'true-view landscape',prompt:'Korean Jeong Seon Jingyeong Sansu true-view landscape, bold powerful Inwangsan rocky mountains of Korea, dramatic EXPRESSIVE brushwork unique to Korean landscape tradition, monochrome ink with bold angular forms, REAL Korean scenery not idealized Chinese mountains, revolutionary Korean style rejecting Chinese conventions, absolutely NOT Chinese literati landscapes, absolutely NOT Japanese decorative landscapes, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_09',title:'화조도',artist:'조선시대',subjects:['flowers','birds','nature'],colors:['natural harmonious colors'],mood:'harmonious',style:'flower bird',prompt:'Korean Joseon Dynasty Hwajodo flower-bird painting, PRESERVE photo composition, harmonious naturalistic composition, natural elegant colors, refined brushwork on hanji, Korean aesthetic sensibility, peaceful contemplative mood, KOREAN FLOWER-BIRD tradition, absolutely NOT Chinese decorative Huaniao, absolutely NOT Japanese bold bird prints, NO anime, NO added characters, Chinese characters allowed, NO Japanese kana'},
  {id:'korean_10',title:'씨름',artist:'김홍도',subjects:['sport','wrestling','people','men'],colors:['natural earth tones'],mood:'lively',style:'genre painting',prompt:'Korean Danwon Kim Hongdo Pungsokdo genre painting, dynamic Ssireum wrestling action capturing intense moment, lively crowd of Korean men, natural earth tones, energetic composition showing Korean folk culture and sports, painted on hanji with swift brushwork, ICONIC KOREAN GENRE PAINTING of common people daily life, Joseon Dynasty social documentation, absolutely NOT Chinese court paintings, absolutely NOT Japanese sumo scenes, Chinese characters allowed, NO Japanese kana'}
];

// Fallback 프롬프트 (AI 실패시 사용)
const fallbackPrompts = {
  ancient: {
    name: '고대 그리스-로마',
    prompt: 'ancient Greek and Roman classical painting style, idealized human forms, marble-like smooth rendering, heroic noble figures, classical drapery, temple architecture, serene dignified expressions, painted in ancient classical masterpiece quality'
  },
  
  byzantineIslamic: {
    name: '비잔틴·이슬람',
    prompt: 'Byzantine and Islamic art style, golden mosaic backgrounds, ornate geometric patterns, rich jewel-like colors, spiritual iconic forms, decorative arabesque motifs, sacred dignified atmosphere, painted in Byzantine-Islamic masterpiece quality'
  },
  
  renaissance: {
    name: '르네상스',
    prompt: 'Renaissance painting style, soft sfumato technique, harmonious balanced composition, warm golden Renaissance colors, detailed naturalistic rendering, gentle serene expressions, classical perspective, painted in Renaissance masterpiece quality'
  },
  
  baroque: {
    name: '바로크',
    prompt: 'Baroque painting style, dramatic chiaroscuro lighting, rich deep colors, dynamic diagonal composition, theatrical emotional atmosphere, strong contrast between light and shadow, painted in Baroque masterpiece quality'
  },
  
  rococo: {
    name: '로코코',
    prompt: 'Rococo painting style, light pastel colors, playful ornate decoration, soft delicate brushwork, romantic elegant atmosphere, graceful curved lines, whimsical charm, painted in Rococo masterpiece quality'
  },
  
  romanticism: {
    name: '낭만주의',
    prompt: 'Romantic painting style, dramatic emotional intensity, sublime natural beauty, vivid expressive colors, dynamic turbulent composition, passionate atmosphere, painted in Romantic masterpiece quality'
  },
  
  impressionism: {
    name: '인상주의',
    prompt: 'Impressionist painting style, visible short brushstrokes, pure unmixed colors, emphasis on natural light effects, outdoor plein-air atmosphere, capturing fleeting moments, painted in Impressionist masterpiece quality'
  },
  
  post_impressionism: {
    name: '후기인상주의',
    prompt: 'Post-Impressionist painting style, bold expressive colors, geometric structured forms, emotional symbolic content, innovative personal vision, painted in Post-Impressionist masterpiece quality'
  },
  
  postImpressionism: {
    name: '후기인상주의',
    prompt: 'Post-Impressionist painting style, bold expressive colors, geometric structured forms, emotional symbolic content, innovative personal vision, painted in Post-Impressionist masterpiece quality'
  },
  
  fauvism: {
    name: '야수파',
    prompt: 'Fauvist painting style, wild pure vivid colors, bold simplified forms, strong non-naturalistic palette, flat decorative patterns, expressive emotional intensity, painted in Fauvist masterpiece quality'
  },
  
  expressionism: {
    name: '표현주의',
    prompt: 'Expressionist painting style, intense emotional colors, distorted exaggerated forms, psychological depth, dramatic angular composition, inner feelings externalized, painted in Expressionist masterpiece quality'
  },
  
  klimt: {
    name: '클림트',
    prompt: 'painting by Gustav Klimt, golden ornamental patterns, Byzantine mosaic influence, decorative symbolic style, sensuous flowing forms, jewel-like colors, Art Nouveau elegance'
  },
  
  picasso: {
    name: '피카소',
    prompt: 'Cubist painting by Pablo Picasso, geometric fragmented forms, multiple simultaneous perspectives, abstract analytical composition, monochromatic or limited palette'
  },
  
  van_gogh: {
    name: '반 고흐',
    prompt: 'painting by Vincent van Gogh, thick expressive swirling brushstrokes, vibrant intense emotional colors, dynamic energetic composition, passionate turbulent style'
  },
  
  matisse: {
    name: '마티스',
    prompt: 'painting by Henri Matisse, bold pure flat colors, simplified harmonious forms, decorative rhythmic patterns, joyful life-affirming atmosphere'
  },
  
  munch: {
    name: '뭉크',
    prompt: 'painting by Edvard Munch, intense emotional psychological depth, symbolic expressive colors, haunting atmospheric mood, existential anxiety visualized'
  },
  
  dali: {
    name: '달리',
    prompt: 'Surrealist painting by Salvador Dalí, dreamlike hyperrealistic details, melting distorted forms, bizarre juxtapositions, subconscious imagery, precise meticulous technique'
  },
  
  // 동양화 - 단순화된 고정 스타일
  korean: {
    name: '한국 민화',
    prompt: 'Korean Minhwa folk painting style with bright vibrant colors from obangsaek palette (red, blue, yellow, green), thick bold black outlines around all shapes, completely flat decorative composition, traditional Korean folk motifs like magpies or tigers or flowers, cheerful optimistic mood, naive playful aesthetic, painted in authentic Korean minhwa masterpiece quality, Chinese characters allowed, NOT Chinese style, NOT Japanese style, NO Japanese kana'
  },
  
  chinese_ink: {
    name: '중국 수묵화',
    prompt: 'Chinese ink wash painting (Shuimohua) style with monochrome black ink gradations from deep black to light grey, soft flowing brushstrokes, minimalist composition with elegant empty space, misty mountains or pine trees, serene meditative atmosphere, painted in authentic Chinese literati painting masterpiece quality, Chinese characters allowed, STRICTLY NO Japanese hiragana katakana, NOT Korean style, NOT Japanese style'
  },
  
  chinese_gongbi: {
    name: '중국 공필화',
    prompt: 'Chinese gongbi meticulous painting style with extremely fine detailed brushwork, delicate precise lines, rich mineral pigments, brilliant colors, birds and flowers subjects, ornate decorative patterns, painted in authentic Chinese imperial court gongbi masterpiece quality, Chinese characters allowed, STRICTLY NO Japanese hiragana katakana, NOT Korean style, NOT Japanese style'
  },
  
  japanese: {
    name: '일본 우키요에',
    prompt: 'Japanese Ukiyo-e woodblock print style with flat areas of bold solid colors, strong clear black outlines, completely flat two-dimensional composition, decorative patterns, stylized simplified forms, elegant refined Japanese aesthetic, painted in authentic Japanese ukiyo-e masterpiece quality, Japanese kana allowed, NO Chinese characters, pure Japanese style only'
  },
  
  masters: {
    name: '거장 화풍',
    prompt: 'Master artist painting style, exceptional technical skill, distinctive artistic vision, profound emotional depth, timeless masterpiece quality'
  },
  
  oriental: {
    name: '동양화',
    prompt: 'Traditional East Asian painting style, ink wash brushwork, minimalist composition, harmony with nature, philosophical contemplation, painted in classical Oriental masterpiece quality'
  }
};

// 동양화 DB 매칭 함수
async function selectOrientalArtwork(imageBase64, artworkDatabase, cultureName, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const artworkList = artworkDatabase.map((art, index) => ({
      number: index + 1,
      title: art.title,
      artist: art.artist,
      style: art.style,
      subjects: art.subjects.join(', '),
      colors: art.colors.join(', '),
      mood: art.mood
    }));
    
    // v28: 스타일 구분 강화
    const styleEmphasis = cultureName === 'Korean' 
      ? '\n\nIMPORTANT: You are selecting KOREAN traditional painting. Do NOT confuse with Chinese or Japanese styles. Korean art uses Chinese characters but has distinct Korean aesthetic.'
      : '\n\nIMPORTANT: You are selecting CHINESE traditional painting. Focus on Chinese-specific characteristics. Chinese art uses Chinese characters as essential cultural elements.';
    
    const promptText = `You are an expert art curator specializing in ${cultureName} traditional painting.

Analyze this photo and select the MOST suitable artwork from the ${cultureName} painting collection below.

COLLECTION (${artworkDatabase.length} artworks):
${JSON.stringify(artworkList, null, 2)}
${styleEmphasis}

MATCHING RULES (IMPORTANT):
1. SUBJECT PRIORITY:
   - Portrait of woman/girl → Select artwork with "beauty portrait" or "women" in subjects
   - Portrait of man/boy → Select artwork with "people" or appropriate figure painting
   - Animals (tiger, bird, fish, horse) → Select artwork with matching animal
   - Flowers/plants → Select artwork with matching flowers/plants
   - Landscape/mountains/nature → Select landscape or mountain artwork
   - Bright/colorful photo → Prefer "folk painting" style (vivid colors)
   - Group of people → Select artwork with "festival" or "people" in subjects

2. STYLE MATCHING:
   - Elegant/refined photo → beauty portrait, elegant style
   - Bright/cheerful/colorful → folk painting (Minhwa)
   - Nature/simple → ink wash painting
   - Dynamic/action → genre painting with movement

3. COLOR MATCHING:
   - Colorful vibrant photo → artworks with "bright colors", "vibrant colors", "folk painting"
   - Monochrome/subtle photo → artworks with "black ink", "ink wash"

CRITICAL: Pay special attention to whether the photo shows a PERSON (especially women) or ANIMALS or NATURE.
Match the PRIMARY subject first, then consider mood and colors.

Return ONLY valid JSON (no markdown, no code blocks):
{
  "analysis": "brief photo description: subject type, mood, colors",
  "selected_number": number (1-${artworkDatabase.length}),
  "selected_title": "artwork title",
  "selected_artist": "artist name",
  "match_reason": "why this artwork matches: subject match + style match"
}

Be precise and prioritize SUBJECT matching above all.`;
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',  // Claude Sonnet 4.5 (최신)
        max_tokens: 600,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageBase64.split(',')[1]
              }
            },
            {
              type: 'text',
              text: promptText
            }
          ]
        }]
      })
    });
    
    clearTimeout(timeout);
    
    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // JSON 파싱 강화 (v28-STABLE)
    let text = data.content[0].text
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();
    
    // { 이전과 } 이후 텍스트 제거 (설명문 제거)
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1) {
      text = text.substring(firstBrace, lastBrace + 1);
    }
    
    const result = JSON.parse(text);
    const selectedArtwork = artworkDatabase[result.selected_number - 1];
    
    if (!selectedArtwork) {
      throw new Error('Invalid artwork selection');
    }
    
    console.log(`✓ AI matched ${cultureName} artwork:`, selectedArtwork.title);
    
    return {
      success: true,
      artwork: selectedArtwork,
      artist: `${selectedArtwork.title} (${selectedArtwork.artist})`,
      title: selectedArtwork.title,
      prompt: selectedArtwork.prompt,
      analysis: result.analysis,
      reason: result.match_reason
    };
    
  } catch (error) {
    clearTimeout(timeout);
    console.error(`${cultureName} artwork selection failed:`, error.message);
    return { success: false, error: error.message };
  }
}

// AI 화가 자동 선택 (타임아웃 포함)
async function selectArtistWithAI(imageBase64, selectedStyle, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    // 모든 카테고리 동일 로직: AI가 사진 분석 후 최적 세부 스타일 선택
    let promptText;
    
    const categoryName = selectedStyle.name;
    const categoryType = selectedStyle.category;
    
    if (categoryType === 'masters') {
      // 거장: 사진에 가장 잘 맞는 시기/스타일 선택
      promptText = `Analyze this photo and select the BEST specific period or style from ${categoryName}'s works that matches this photo.

${categoryName} created works in various periods and styles. Analyze the photo and select which period/style would transform this photo most beautifully.

Instructions:
1. Analyze the photo: subject, mood, colors, composition, lighting, atmosphere
2. Consider ${categoryName}'s different periods and styles (early works, peak period, different techniques)
3. Match the photo's characteristics to the MOST SUITABLE period/style from ${categoryName}'s career
4. Generate a detailed FLUX prompt using that specific period's distinctive characteristics
5. IMPORTANT: Preserve the original subject - if it's a baby, keep it as a baby; if elderly, keep elderly

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo analysis (mood, colors, subject)",
  "selected_artist": "${categoryName}",
  "selected_period": "specific period or style name (e.g. Blue Period, Arles Period, Golden Period)",
  "reason": "why THIS specific period of ${categoryName} matches this photo perfectly",
  "prompt": "painting by ${categoryName} in [specific period], [that period's distinctive techniques and colors], depicting the subject while preserving original features and age"
}

Keep it concise and accurate.`;
      
    } else if (categoryType === 'oriental') {
      // 동양화: 한국/일본 고정, 중국만 AI 선택
      const styleId = selectedStyle.id;
      
      if (styleId === 'korean') {
        // 한국 - 무조건 민화 (AI 선택 없음)
        return {
          success: true,
          artist: '한국 민화',
          reason: 'Korean traditional folk painting style',
          prompt: fallbackPrompts.korean.prompt,
          analysis: 'Korean minhwa style applied'
        };
      }
      
      if (styleId === 'japanese') {
        // 일본 - 무조건 우키요에 (AI 선택 없음)
        return {
          success: true,
          artist: '일본 우키요에',
          reason: 'Japanese traditional ukiyo-e style',
          prompt: fallbackPrompts.japanese.prompt,
          analysis: 'Japanese ukiyo-e style applied'
        };
      }
      
      if (styleId === 'chinese') {
        // 중국 - AI 선택 (수묵화 vs 공필화)
        promptText = `Analyze this photo and select the best Chinese traditional art style.

You must choose between TWO styles only:

Style 1: Chinese Ink Wash Painting (水墨畫 Shuimohua)
- Best for: landscapes, nature, contemplative subjects, simple compositions
- Technique: monochrome black ink, soft brushstrokes, minimalist, empty space
- Mood: serene, meditative, scholarly

Style 2: Chinese Gongbi Meticulous Painting (工筆畫)
- Best for: portraits, flowers, birds, detailed subjects, colorful compositions
- Technique: fine detailed lines, rich mineral colors, ornate patterns
- Mood: decorative, luxurious, imperial

Analyze the photo and choose the MOST suitable style.

CRITICAL LANGUAGE RULE:
- Chinese characters (漢字) are ALLOWED
- Japanese hiragana (ひらがな) and katakana (カタカナ) are STRICTLY FORBIDDEN
- This is CHINESE art, NOT Japanese art

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo description (1 sentence)",
  "selected_artist": "Chinese ink wash painting" or "Chinese gongbi painting",
  "selected_style": "ink_wash" or "gongbi",
  "reason": "why this style fits (1 sentence)",
  "prompt": "Complete FLUX prompt starting with 'Chinese [style name] style, [detailed characteristics]... Chinese characters allowed, STRICTLY NO Japanese hiragana katakana, NOT Japanese ukiyo-e'"
}

Keep it concise and accurate.`;
      }
      
    } else {
      // 미술사조: 사조 내 화가 중 최적 선택
      promptText = `Analyze this photo and select the BEST artist from ${categoryName} period/style to transform it.

Instructions:
1. Analyze: subject, age, mood, composition, lighting
2. Select the MOST SUITABLE ${categoryName} artist for THIS specific photo
3. Generate a detailed prompt for FLUX Depth in that artist's style
4. IMPORTANT: Preserve the original subject - if it's a baby, keep it as a baby; if elderly, keep elderly

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo description",
  "selected_artist": "Artist Full Name",
  "reason": "why this artist fits this photo",
  "prompt": "painting by [Artist], [artist's technique], [artist's characteristics], depicting the subject while preserving original features and age"
}

Keep it concise and accurate.`;
    }
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',  // Claude Sonnet 4.5 (최신)
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageBase64.split(',')[1]
              }
            },
            {
              type: 'text',
              text: promptText
            }
          ]
        }]
      })
    });
    
    clearTimeout(timeout);
    
    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }
    
    const data = await response.json();
    const text = data.content[0].text
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();
    
    const result = JSON.parse(text);
    
    // 검증
    if (!result.prompt || !result.selected_artist) {
      throw new Error('Invalid AI response format');
    }
    
    return {
      success: true,
      artist: result.selected_artist,
      reason: result.reason,
      prompt: result.prompt,
      analysis: result.analysis
    };
    
  } catch (error) {
    clearTimeout(timeout);
    console.error('AI selection failed:', error.message);
    return { success: false, error: error.message };
  }
}

// 메인 핸들러
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, selectedStyle } = req.body;

    // 디버깅 로그
    console.log('=== SDXL Transfer Debug ===');
    console.log('Has REPLICATE_API_KEY:', !!process.env.REPLICATE_API_KEY);
    console.log('Has ANTHROPIC_API_KEY:', !!process.env.ANTHROPIC_API_KEY);
    console.log('Has image:', !!image);
    console.log('Has selectedStyle:', !!selectedStyle);
    console.log('selectedStyle:', selectedStyle);

    if (!process.env.REPLICATE_API_KEY) {
      console.error('ERROR: REPLICATE_API_KEY not configured');
      return res.status(500).json({ error: 'Replicate API key not configured' });
    }

    if (!image || !selectedStyle) {
      console.error('ERROR: Missing image or selectedStyle');
      console.error('image exists:', !!image);
      console.error('selectedStyle:', JSON.stringify(selectedStyle, null, 2));
      return res.status(400).json({ error: 'Missing image or style' });
    }

    // selectedStyle 구조 검증
    if (!selectedStyle.name || !selectedStyle.category) {
      console.error('ERROR: Invalid selectedStyle structure');
      console.error('selectedStyle:', JSON.stringify(selectedStyle, null, 2));
      return res.status(400).json({ 
        error: 'Invalid style structure',
        details: 'Missing name or category'
      });
    }

    let finalPrompt;
    let selectedArtist;
    let selectionMethod;
    let selectionDetails = {};

    // 1. 동양화 DB 매칭 (한국/중국)
    if (selectedStyle.category === 'oriental' && 
        (selectedStyle.id === 'korean' || selectedStyle.id === 'chinese')) {
      
      console.log(`[v27] Oriental DB matching: ${selectedStyle.id}`);
      
      const artworkDatabase = selectedStyle.id === 'korean' ? koreanArtworks : chineseArtworks;
      const cultureName = selectedStyle.id === 'korean' ? 'Korean' : 'Chinese';
      
      if (process.env.ANTHROPIC_API_KEY) {
        console.log(`Trying AI artwork selection from ${cultureName} database...`);
        
        // 1차 시도
        let selection = await selectOrientalArtwork(image, artworkDatabase, cultureName);
        
        // 1차 실패 시 재시도 (v28-COMMERCIAL)
        if (!selection.success) {
          console.log('⚠️ First attempt failed, retrying once...');
          selection = await selectOrientalArtwork(image, artworkDatabase, cultureName);
        }
        
        if (selection.success) {
          finalPrompt = selection.prompt;
          selectedArtist = selection.artist;
          selectionMethod = selection.retried ? 'oriental_db_match_retry' : 'oriental_db_match';
          selectionDetails = {
            artwork_id: selection.artwork.id,
            artwork_title: selection.title,
            artist: selection.artwork.artist,
            style: selection.artwork.style,
            analysis: selection.analysis,
            match_reason: selection.reason,
            retried: selection.retried || false
          };
          console.log('✅ AI matched artwork:', selectedArtist);
        } else {
          console.log('⚠️ Both attempts failed, using smart fallback');
          
          // 스마트 Fallback: 랜덤 선택으로 다양성 확보
          let fallbackArtwork;
          
          if (selectedStyle.id === 'korean') {
            // 한국: 랜덤 선택 (다양한 스타일 시도)
            const randomIndex = Math.floor(Math.random() * artworkDatabase.length);
            fallbackArtwork = artworkDatabase[randomIndex];
            console.log(`🎲 Korean fallback random selection: ${fallbackArtwork.title} (${randomIndex + 1}/${artworkDatabase.length})`);
          } else {
            // 중국: 랜덤 선택
            const randomIndex = Math.floor(Math.random() * artworkDatabase.length);
            fallbackArtwork = artworkDatabase[randomIndex];
            console.log(`🎲 Chinese fallback random selection: ${fallbackArtwork.title} (${randomIndex + 1}/${artworkDatabase.length})`);
          }
          
          finalPrompt = fallbackArtwork.prompt;
          selectedArtist = `${fallbackArtwork.title} (${fallbackArtwork.artist})`;
          selectionMethod = 'oriental_db_smart_fallback';
          selectionDetails = {
            artwork_id: fallbackArtwork.id,
            error: selection.error,
            fallback_reason: 'Using landscape painting as safe fallback'
          };
        }
      } else {
        console.log('ℹ️ No AI key, using first artwork from database');
        const fallbackArtwork = artworkDatabase[0];
        finalPrompt = fallbackArtwork.prompt;
        selectedArtist = `${fallbackArtwork.title} (${fallbackArtwork.artist})`;
        selectionMethod = 'oriental_db_no_ai';
        selectionDetails = {
          artwork_id: fallbackArtwork.id
        };
      }
      
    // 2. 일본 우키요에 (고정)
    } else if (selectedStyle.category === 'oriental' && selectedStyle.id === 'japanese') {
      console.log('Japanese Ukiyo-e - using fixed style');
      
      const fallback = fallbackPrompts.japanese;
      finalPrompt = fallback.prompt;
      selectedArtist = fallback.name;
      selectionMethod = 'oriental_fixed';
      selectionDetails = {
        style: 'japanese_ukiyoe'
      };
      
    // 3. 서양 미술 (미술사조/거장)
    } else if (process.env.ANTHROPIC_API_KEY) {
      console.log(`Trying AI artist selection for ${selectedStyle.name}...`);
      
      const aiResult = await selectArtistWithAI(
        image, 
        selectedStyle,  // ← selectedStyle 객체 전체 전달
        8000 // 8초 타임아웃
      );
      
      if (aiResult.success) {
        // AI 성공!
        finalPrompt = aiResult.prompt;
        selectedArtist = aiResult.artist;
        selectionMethod = 'ai_auto';
        selectionDetails = {
          analysis: aiResult.analysis,
          reason: aiResult.reason
        };
        console.log('✅ AI selected:', selectedArtist);
      } else {
        // AI 실패 → Fallback
        console.log('⚠️ AI failed, using fallback');
        
        // 거장/동양화는 id에서 키 추출, 미술사조는 category 사용
        let fallbackKey = selectedStyle.category;
        
        if (selectedStyle.category === 'masters') {
          // 'picasso-master' → 'picasso'
          fallbackKey = selectedStyle.id.replace('-master', '');
          
          // 특수 케이스: vangogh → van_gogh
          if (fallbackKey === 'vangogh') {
            fallbackKey = 'van_gogh';
          }
        } else if (selectedStyle.category === 'oriental') {
          // 동양화 fallback 키 설정
          if (selectedStyle.id === 'chinese') {
            fallbackKey = 'chinese_ink';  // 중국은 기본 수묵화
          } else {
            fallbackKey = selectedStyle.id;  // korean, japanese
          }
        }
        
        console.log('Using fallback key:', fallbackKey);
        const fallback = fallbackPrompts[fallbackKey];
        
        if (!fallback) {
          console.error('ERROR: No fallback found for key:', fallbackKey);
          console.error('Available categories:', Object.keys(fallbackPrompts));
          throw new Error(`No fallback prompt for: ${fallbackKey}`);
        }
        
        finalPrompt = fallback.prompt;
        selectedArtist = fallback.name;
        selectionMethod = 'fallback';
        selectionDetails = {
          ai_error: aiResult.error
        };
      }
    } else {
      // ANTHROPIC_API_KEY 없음 → Fallback
      console.log('ℹ️ No AI key, using fallback');
      
      // 거장/동양화는 id에서 키 추출, 미술사조는 category 사용
      let fallbackKey = selectedStyle.category;
      
      if (selectedStyle.category === 'masters') {
        // 'picasso-master' → 'picasso'
        fallbackKey = selectedStyle.id.replace('-master', '');
        
        // 특수 케이스: vangogh → van_gogh
        if (fallbackKey === 'vangogh') {
          fallbackKey = 'van_gogh';
        }
      } else if (selectedStyle.category === 'oriental') {
        // 동양화: 간단하게 처리
        if (selectedStyle.id === 'korean') {
          fallbackKey = 'korean';
        } else if (selectedStyle.id === 'chinese') {
          // 중국은 기본 수묵화
          fallbackKey = 'chinese_ink';
        } else if (selectedStyle.id === 'japanese') {
          fallbackKey = 'japanese';
        }
      }
      
      console.log('Using fallback key:', fallbackKey);
      const fallback = fallbackPrompts[fallbackKey];
      
      if (!fallback) {
        console.error('ERROR: No fallback found for key:', fallbackKey);
        console.error('Available categories:', Object.keys(fallbackPrompts));
        throw new Error(`No fallback prompt for: ${fallbackKey}`);
      }
      
      finalPrompt = fallback.prompt;
      selectedArtist = fallback.name;
      selectionMethod = 'fallback_no_key';
    }

    console.log('Final prompt:', finalPrompt);
    
    // FLUX Depth 변환 (최신 API 버전)
    const response = await fetch(
      'https://api.replicate.com/v1/models/black-forest-labs/flux-depth-dev/predictions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'wait'
        },
        body: JSON.stringify({
          input: {
            control_image: image,
            prompt: finalPrompt,
            num_inference_steps: 28,       // 28-50 추천
            guidance: 10,                   // 전통화 스타일 강화
            output_format: 'jpg',
            output_quality: 90
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('FLUX Depth error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `FLUX API error: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('✅ FLUX Depth completed');
    
    // 결과에 선택 정보 포함
    res.status(200).json({
      ...data,
      selected_artist: selectedArtist,
      selection_method: selectionMethod,
      selection_details: selectionDetails
    });
    
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

/*
작동 방식:

시나리오 1: AI 성공 (95%)
─────────────────────────
사진: 아기
선택: 바로크

AI 분석 중... (3초)
✅ AI 선택: 루벤스
이유: "아기 그림 전문"
프롬프트: "Baroque by Rubens, cherubic baby..."

FLUX 변환... (30초)
결과: 루벤스 스타일 아기 ✅

시나리오 2: AI 실패 (5%)
─────────────────────────
사진: 아기
선택: 바로크

AI 분석 중... (타임아웃 또는 에러)
⚠️ Fallback 사용
프롬프트: "Baroque style, dramatic lighting..."

FLUX 변환... (30초)
결과: 바로크 스타일 아기 ✅ (화가명 없지만 작동)

시나리오 3: API 키 없음
─────────────────────────
ℹ️ AI 키 없음
Fallback 사용

FLUX 변환... (30초)
결과: 기본 스타일 ✅
*/
