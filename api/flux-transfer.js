// PicoArt v28.10 - 실제 파일 구조 반영 + 커플 남성 얼굴 참조
// Real file structure + Couple male face reference enhancement

// 동양화 DB
const chineseArtworks = [
  {id:'chinese_01',title:'천리강산도',artist:'왕희맹',subjects:['mountains','rivers','nature'],colors:['blue','green','gold'],mood:'majestic',style:'blue-green landscape',prompt:'Chinese blue-green landscape painting Qinglu Shanshui style by Wang Ximeng, grand panoramic mountains and rivers, brilliant blue-green mineral pigments, golden aged paper, meticulous gongbi technique, imperial court quality, majestic serene atmosphere, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_02',title:'궁녀도',artist:'주방',subjects:['people','women','portraits'],colors:['soft pastels','earth tones'],mood:'elegant',style:'figure painting',prompt:'Chinese gongbi court painting style, CRITICAL STRICT: if subject is male MUST keep male features and masculine face with beard, if subject is female MUST keep female features, elegant graceful figures, delicate fine facial features, flowing robes, soft harmonious colors, extremely detailed brushwork, refined imperial court quality, ABSOLUTELY PRESERVE ORIGINAL GENDER, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_03',title:'새우',artist:'제백석',subjects:['animals','aquatic life'],colors:['black ink','grey'],mood:'lively',style:'ink wash',prompt:'Chinese ink wash painting Shuimohua style by Qi Baishi, spontaneous expressive brushwork, lively movement, monochrome black ink gradations, minimalist composition with elegant empty space, modern Chinese literati painting quality, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_09',title:'미인도',artist:'당인',subjects:['women','portraits','beauty'],colors:['soft colors','pastels'],mood:'refined',style:'beauty portrait',prompt:'Chinese gongbi beauty portrait style, CRITICAL STRICT: if male MUST keep masculine features with beard, if female MUST keep feminine features, elegant refined figure, delicate detailed facial features, soft harmonious colors, fine silk texture rendering, graceful posture, traditional Chinese beauty painting quality, ABSOLUTELY PRESERVE ORIGINAL GENDER, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_11',title:'대나무',artist:'정섭',subjects:['bamboo','plants'],colors:['black ink','grey'],mood:'strong',style:'ink bamboo',prompt:'Chinese ink bamboo painting style by Zheng Xie, bold expressive brushstrokes, monochrome black ink, bamboo stalks and leaves, literati scholarly painting, symbolic of integrity and resilience, classical quality, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_13',title:'새',artist:'황전',subjects:['birds','flowers','nature'],colors:['natural colors'],mood:'delicate',style:'bird and flower',prompt:'Chinese gongbi bird and flower painting style, detailed naturalistic bird feathers, precise meticulous brushwork, delicate soft colors, traditional flower-bird painting Huaniao, decorative elegant composition, imperial quality, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_15',title:'말',artist:'서비홍',subjects:['horses','animals','movement'],colors:['black ink'],mood:'powerful',style:'ink horse',prompt:'Chinese ink wash horse painting style by Xu Beihong, dynamic powerful movement, bold expressive brushstrokes, monochrome black ink, modern Chinese painting style, energetic composition, contemporary ink painting quality, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'},
  {id:'chinese_16_males',title:'명대 남성 초상',artist:'명대',subjects:['men','multiple men','male portraits','scholars'],colors:['traditional colors','earth tones'],mood:'dignified',style:'male portrait',prompt:'Chinese Ming Dynasty male portraits, MASCULINE FEATURES ONLY STRICTLY ENFORCED, dignified Chinese men in traditional scholar attire, strong masculine faces with beards MUST HAVE BEARDS, serious scholarly expressions, MULTIPLE MALE FIGURES if photo shows multiple people, traditional Chinese male portrait quality, ABSOLUTELY PRESERVE MALE GENDER FOR ALL MEN, REFERENCE: Ming Dynasty emperor and scholar male face characteristics - strong jawline, facial hair, dignified masculine expression, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), NO Japanese text, PURE CHINESE NOT Japanese'}
];

const koreanArtworks = [
  {id:'korean_01',title:'미인도',artist:'신윤복',subjects:['women','beauty','portraits'],colors:['soft pastels'],mood:'elegant',style:'beauty portrait',prompt:'Korean Hyewon Shin Yunbok Joseon Pungsokdo genre painting, CRITICAL: if subject is male keep male features and masculine appearance, if subject is female keep female features, elegant figure in hanbok, soft pastel colors, gentle expression on hanji, PRESERVE ORIGINAL GENDER, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_02',title:'까치호랑이',artist:'민화',subjects:['tiger','magpie','animals'],colors:['bright colors','bold outlines'],mood:'cheerful',style:'folk painting',prompt:'Korean Minhwa folk painting, THICK BOLD BLACK OUTLINES, BRIGHT Obangsaek colors (red blue yellow white black), FLAT naive composition, playful tiger and magpie, UNIQUELY KOREAN style, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_03',title:'단오풍정',artist:'신윤복',subjects:['festival','people','celebration'],colors:['vibrant colors'],mood:'joyful',style:'genre painting',prompt:'Korean Hyewon Shin Yunbok Joseon Pungsokdo genre painting, CRITICAL: maintain each person original gender from photo, if male keep male if female keep female, Dano festival with Korean figures in colorful hanbok, vibrant festive atmosphere, Korean daily life storytelling, PRESERVE ALL ORIGINAL GENDERS, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_03_kim_study',title:'서당',artist:'김홍도',subjects:['children','learning','education','teacher','multiple people'],colors:['natural earth tones','soft colors'],mood:'scholarly',style:'genre painting',prompt:'Korean Danwon Kim Hongdo Seodang (village school) scene, PRESERVE each person gender and age from photo, children learning with teacher, warm educational atmosphere, soft natural earth tones, Korean traditional education culture, swift brushwork, ICONIC KOREAN GENRE PAINTING, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_04_male',title:'선비 초상',artist:'조선시대',subjects:['men','scholars','portraits','single man'],colors:['earth tones','black ink'],mood:'dignified',style:'male portrait',prompt:'Korean Joseon Dynasty male scholar portrait, MASCULINE FEATURES ONLY STRICTLY ENFORCED, dignified Korean man in traditional scholar official attire with gat hat, strong masculine face with beard MUST HAVE BEARD, serious scholarly expression on hanji, KOREAN MALE PORTRAIT tradition with strong jawline and facial hair, PRESERVE MALE GENDER, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_06',title:'책거리',artist:'민화',subjects:['books','stationery','still life','scholar objects'],colors:['bright colors','colorful patterns'],mood:'scholarly',style:'folk still life',prompt:'Korean Minhwa Chaekgeori folk painting, scholar objects still life, THICK BLACK OUTLINES, BRIGHT decorative colors, FLAT impossible perspective, PURELY KOREAN folk genre, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) on book spines as text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_07',title:'맹호도',artist:'조선시대',subjects:['tiger','fierce','animal','pine tree'],colors:['black ink','brown','aged paper'],mood:'powerful',style:'realistic animal',prompt:'Korean Joseon fierce tiger painting Maenghodo, powerful tiger under pine tree, detailed fur texture, monochrome ink with brown on aged hanji, bold Korean brushwork, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_08',title:'인왕제색도',artist:'정선',subjects:['mountains','rocks','landscape'],colors:['black ink','grey'],mood:'powerful',style:'true-view landscape',prompt:'Korean Jeong Seon Jingyeong true-view landscape, bold Inwangsan rocky mountains, dramatic EXPRESSIVE Korean brushwork, monochrome ink angular forms, REAL Korean scenery, revolutionary Korean landscape tradition, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_09',title:'화조도',artist:'조선시대',subjects:['flowers','birds','nature'],colors:['natural harmonious colors'],mood:'harmonious',style:'flower bird',prompt:'Korean Joseon Hwajodo flower-bird painting, PRESERVE photo composition, harmonious naturalistic composition, natural elegant colors, refined brushwork on hanji, peaceful contemplative mood, KOREAN FLOWER-BIRD tradition, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'},
  {id:'korean_10',title:'씨름',artist:'김홍도',subjects:['sport','wrestling','people','men','action'],colors:['natural earth tones'],mood:'lively',style:'genre painting',prompt:'Korean Danwon Kim Hongdo Pungsokdo genre painting, dynamic Ssireum wrestling action, lively Korean men, natural earth tones, energetic Korean folk culture composition, swift brushwork, ICONIC KOREAN GENRE PAINTING, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul (한글) + Chinese (漢字) text only, NO Japanese kana (ひらがな/カタカナ), PURE KOREAN'}
];

// 커플 사진용 특수 프롬프트 강화 함수
function enhanceCouplePrompt(basePrompt, cultureName) {
  if (cultureName === 'Chinese') {
    // 중국 커플: chinese_16_males의 남성 얼굴 참조
    return basePrompt + ' | CRITICAL FOR COUPLE PHOTOS: Male figure MUST reference Chinese Ming Dynasty male portrait style from chinese_16_males - strong masculine face with beard, dignified male scholar features, serious expression. Female figure keeps elegant feminine features. ABSOLUTELY PRESERVE BOTH GENDERS SEPARATELY.';
  } else if (cultureName === 'Korean') {
    // 한국 커플: korean_04_male의 남성 얼굴 참조
    return basePrompt + ' | CRITICAL FOR COUPLE PHOTOS: Male figure MUST reference Korean Joseon scholar portrait style from korean_04_male - masculine face with beard, gat hat, strong jawline, dignified expression. Female figure keeps elegant hanbok feminine features. ABSOLUTELY PRESERVE BOTH GENDERS SEPARATELY.';
  }
  return basePrompt;
}

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
    prompt: 'Korean Minhwa folk painting style, bright Obangsaek colors (red blue yellow green), thick bold black outlines, flat decorative composition, Korean folk motifs (magpies/tigers/flowers), cheerful naive aesthetic, NO anime NO animation TRADITIONAL PAINTING ONLY, ALLOWED: Hangul + Chinese text only, NO Japanese kana, PURE KOREAN'
  },
  
  chinese_ink: {
    name: '중국 수묵화',
    prompt: 'Chinese ink wash painting Shuimohua style, monochrome black ink gradations, soft flowing brushstrokes, minimalist composition with elegant empty space, serene meditative atmosphere, authentic Chinese literati painting quality, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), PURE CHINESE NOT Japanese'
  },
  
  chinese_gongbi: {
    name: '중국 공필화',
    prompt: 'Chinese gongbi meticulous painting style, extremely fine detailed brushwork, delicate precise lines, rich mineral pigments, brilliant colors, birds and flowers subjects, ornate decorative patterns, authentic Chinese imperial court gongbi quality, ALLOWED: Chinese (漢字/汉字) text only, ABSOLUTELY NO Japanese hiragana (ひらがな), ABSOLUTELY NO Japanese katakana (カタカナ), PURE CHINESE NOT Japanese'
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
    
    // v28.10: 커플/남성 감지 강화
    const genderGuidance = `\n\nGENDER MATCHING CRITICAL RULES:
- Photo shows COUPLE (man + woman) → Select artwork with "couple" in subjects if available
- Photo shows SINGLE MAN or MULTIPLE MEN → Select artwork with "men", "male", "scholars" in subjects
- Photo shows WOMAN/WOMEN → Select artwork with "women", "beauty" in subjects
- Photo shows CHILDREN → Select artwork with "children", "learning" in subjects`;
    
    const promptText = `You are an expert art curator specializing in ${cultureName} traditional painting.

Analyze this photo and select the MOST suitable artwork from the ${cultureName} painting collection below.

COLLECTION (${artworkDatabase.length} artworks):
${JSON.stringify(artworkList, null, 2)}
${styleEmphasis}
${genderGuidance}

MATCHING RULES (PRIORITY ORDER):
1. GENDER/PEOPLE PRIORITY (MOST IMPORTANT):
   - Couple (man + woman together) → artwork with "couple" subjects
   - Single man or men only → artwork with "men", "male", "scholars" subjects
   - Woman/women only → artwork with "women", "beauty" subjects
   - Children/learning scene → artwork with "children", "education" subjects
   - Multiple people → artwork with "festival", "people" subjects

2. SUBJECT MATCHING:
   - Animals (tiger, bird, horse) → matching animal artwork
   - Flowers/plants → matching flora artwork
   - Landscape/mountains → landscape artwork
   - Still life/objects → still life artwork

3. STYLE MATCHING:
   - Bright/colorful → folk painting style
   - Elegant/refined → court painting style
   - Dynamic/action → genre painting style

CRITICAL: ALWAYS prioritize GENDER and PEOPLE COUNT matching first, then consider other factors.

Return ONLY valid JSON (no markdown, no code blocks):
{
  "analysis": "brief photo description: number of people, their genders, main subject, mood",
  "selected_number": number (1-${artworkDatabase.length}),
  "selected_title": "artwork title",
  "selected_artist": "artist name",
  "match_reason": "why this artwork matches: gender match + subject match + style match"
}

Be precise and prioritize GENDER/PEOPLE matching above all.`;
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
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
    let responseText = data.content[0].text;
    
    // 마크다운 코드 블록 제거
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // JSON 파싱 시도
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Response text:', responseText);
      throw new Error('Failed to parse AI response');
    }
    
    // 선택된 작품 가져오기
    const selectedIndex = parsedData.selected_number - 1;
    
    if (selectedIndex < 0 || selectedIndex >= artworkDatabase.length) {
      throw new Error(`Invalid artwork number: ${parsedData.selected_number}`);
    }
    
    const selectedArtwork = artworkDatabase[selectedIndex];
    
    // v28.10: 커플 사진 감지 및 프롬프트 강화
    let finalPrompt = selectedArtwork.prompt;
    const isCouplePhoto = parsedData.analysis.toLowerCase().includes('couple') || 
                          parsedData.analysis.toLowerCase().includes('man and woman') ||
                          (parsedData.analysis.toLowerCase().includes('man') && 
                           parsedData.analysis.toLowerCase().includes('woman'));
    
    if (isCouplePhoto) {
      console.log('🎭 COUPLE PHOTO DETECTED - Enhancing prompt with male reference');
      finalPrompt = enhanceCouplePrompt(finalPrompt, cultureName);
    }
    
    return {
      success: true,
      prompt: finalPrompt,
      artwork: selectedArtwork,
      title: selectedArtwork.title,
      artist: selectedArtwork.artist,
      analysis: parsedData.analysis,
      reason: parsedData.match_reason,
      isCouplePhoto: isCouplePhoto
    };
    
  } catch (error) {
    clearTimeout(timeout);
    console.error('AI selection error:', error.message);
    
    return {
      success: false,
      error: error.message
    };
  }
}

// 서양 미술 AI 선택 함수 (기존 유지)
async function selectArtistWithAI(imageBase64, selectedStyle, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    let promptText;
    
    if (selectedStyle.category === 'movements') {
      // 미술사조용 프롬프트
      promptText = `Analyze this photo and create an art style transfer prompt for the "${selectedStyle.name}" art movement.

CRITICAL REQUIREMENTS:
1. Your prompt MUST be in ENGLISH
2. Your prompt MUST start with: "${selectedStyle.name} painting style"
3. Describe specific visual characteristics of ${selectedStyle.name} style
4. Reference the art movement's typical: brushwork, colors, composition, mood
5. End with: "painted in ${selectedStyle.name} masterpiece quality"

Return ONLY valid JSON (no markdown, no code blocks):
{
  "analysis": "brief photo description",
  "prompt": "your complete English prompt starting with '${selectedStyle.name} painting style...'",
  "reason": "why this style fits the photo"
}`;
      
    } else if (selectedStyle.category === 'masters') {
      // 거장용 프롬프트
      const artistName = selectedStyle.name;
      promptText = `Analyze this photo and create an art style transfer prompt in the style of ${artistName}.

CRITICAL REQUIREMENTS:
1. Your prompt MUST be in ENGLISH
2. Your prompt MUST start with: "painting by ${artistName}"
3. Describe ${artistName}'s distinctive style characteristics
4. Reference specific techniques, brushwork, color palette that ${artistName} is famous for
5. Match the photo's subject to ${artistName}'s typical subjects

Return ONLY valid JSON (no markdown, no code blocks):
{
  "analysis": "brief photo description",
  "prompt": "your complete English prompt starting with 'painting by ${artistName}...'",
  "reason": "why ${artistName}'s style fits this photo"
}`;
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
        model: 'claude-sonnet-4-5',
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
    let responseText = data.content[0].text;
    
    // 마크다운 제거
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const parsedData = JSON.parse(responseText);
    
    return {
      success: true,
      prompt: parsedData.prompt,
      artist: selectedStyle.name,
      analysis: parsedData.analysis,
      reason: parsedData.reason
    };
    
  } catch (error) {
    clearTimeout(timeout);
    console.error('AI artist selection error:', error.message);
    
    return {
      success: false,
      error: error.message
    };
  }
}

// 메인 핸들러
export default async function handler(req, res) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, selectedStyle } = req.body;
    
    console.log('\n=== FLUX Transfer Request ===');
    console.log('Style category:', selectedStyle?.category);
    console.log('Style name:', selectedStyle?.name);
    console.log('Style id:', selectedStyle?.id);

    if (!process.env.REPLICATE_API_KEY) {
      console.error('ERROR: REPLICATE_API_KEY not configured');
      return res.status(500).json({ error: 'Replicate API key not configured' });
    }

    if (!image || !selectedStyle) {
      console.error('ERROR: Missing image or selectedStyle');
      return res.status(400).json({ error: 'Missing image or style' });
    }

    if (!selectedStyle.name || !selectedStyle.category) {
      console.error('ERROR: Invalid selectedStyle structure');
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
      
      console.log(`[v28.10] Oriental DB matching: ${selectedStyle.id}`);
      
      const artworkDatabase = selectedStyle.id === 'korean' ? koreanArtworks : chineseArtworks;
      const cultureName = selectedStyle.id === 'korean' ? 'Korean' : 'Chinese';
      
      if (process.env.ANTHROPIC_API_KEY) {
        console.log(`Trying AI artwork selection from ${cultureName} database...`);
        
        // 1차 시도
        let selection = await selectOrientalArtwork(image, artworkDatabase, cultureName);
        
        // 1차 실패 시 재시도
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
            is_couple_photo: selection.isCouplePhoto || false,
            retried: selection.retried || false
          };
          console.log('✅ AI matched artwork:', selectedArtist);
          if (selection.isCouplePhoto) {
            console.log('🎭 Couple photo detected - male reference added');
          }
        } else {
          console.log('⚠️ Both attempts failed, using smart fallback');
          
          // 스마트 Fallback
          const randomIndex = Math.floor(Math.random() * artworkDatabase.length);
          const fallbackArtwork = artworkDatabase[randomIndex];
          console.log(`🎲 Fallback random selection: ${fallbackArtwork.title}`);
          
          finalPrompt = fallbackArtwork.prompt;
          selectedArtist = `${fallbackArtwork.title} (${fallbackArtwork.artist})`;
          selectionMethod = 'oriental_db_smart_fallback';
          selectionDetails = {
            artwork_id: fallbackArtwork.id,
            error: selection.error
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
      
      const aiResult = await selectArtistWithAI(image, selectedStyle, 8000);
      
      if (aiResult.success) {
        finalPrompt = aiResult.prompt;
        selectedArtist = aiResult.artist;
        selectionMethod = 'ai_auto';
        selectionDetails = {
          analysis: aiResult.analysis,
          reason: aiResult.reason
        };
        console.log('✅ AI selected:', selectedArtist);
      } else {
        console.log('⚠️ AI failed, using fallback');
        
        let fallbackKey = selectedStyle.category;
        
        if (selectedStyle.category === 'masters') {
          fallbackKey = selectedStyle.id.replace('-master', '');
          if (fallbackKey === 'vangogh') {
            fallbackKey = 'van_gogh';
          }
        } else if (selectedStyle.category === 'oriental') {
          if (selectedStyle.id === 'chinese') {
            fallbackKey = 'chinese_ink';
          } else if (selectedStyle.id === 'korean') {
            fallbackKey = 'korean';
          } else if (selectedStyle.id === 'japanese') {
            fallbackKey = 'japanese';
          }
        }
        
        const fallback = fallbackPrompts[fallbackKey] || fallbackPrompts.masters;
        finalPrompt = fallback.prompt;
        selectedArtist = fallback.name;
        selectionMethod = 'fallback';
        selectionDetails = {
          fallback_key: fallbackKey,
          error: aiResult.error
        };
      }
      
    // 4. AI 없을 때 기본 Fallback
    } else {
      console.log('No AI available - using basic fallback');
      
      let fallbackKey = selectedStyle.category;
      if (selectedStyle.category === 'masters') {
        fallbackKey = selectedStyle.id.replace('-master', '');
        if (fallbackKey === 'vangogh') fallbackKey = 'van_gogh';
      }
      
      const fallback = fallbackPrompts[fallbackKey] || fallbackPrompts.masters;
      finalPrompt = fallback.prompt;
      selectedArtist = fallback.name;
      selectionMethod = 'no_ai_fallback';
      selectionDetails = {
        fallback_key: fallbackKey
      };
    }

    console.log('Final prompt preview:', finalPrompt.substring(0, 100) + '...');
    console.log('Selection method:', selectionMethod);

    // FLUX Depth API 호출 (원래 버전)
    const fluxResponse = await fetch(
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
            num_inference_steps: 24,
            control_strength: 0.65,
            seed: Math.floor(Math.random() * 1000000)
          }
        })
      }
    );

    if (!fluxResponse.ok) {
      const errorText = await fluxResponse.text();
      console.error('FLUX API error:', fluxResponse.status, errorText);
      throw new Error(`FLUX API failed: ${fluxResponse.status}`);
    }

    const fluxData = await fluxResponse.json();
    console.log('FLUX response status:', fluxData.status);

    if (fluxData.status === 'failed') {
      throw new Error('FLUX processing failed');
    }

    return res.status(200).json({
      success: true,
      id: fluxData.id,
      status: fluxData.status,
      output: fluxData.output,
      artist: selectedArtist,
      selectionMethod: selectionMethod,
      selectionDetails: selectionDetails
    });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ 
      error: error.message || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
