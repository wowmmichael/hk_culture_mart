'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';

// Default translations
const translations = {
  'zh-TW': {
    'nav.home': '首頁',
    'nav.toys': '玩具',
    'nav.culture': '文創文旅',
    'nav.christmas': '聖誕節',
    'nav.halloween': '萬聖節',
    'nav.newyear': '贺年礼品',
    'nav.about': '關於我們',
    'site.title': '香岛文化',
    'site.description': '香港本地產品的多元市集，分享香港文化與創意',
    
    // Homepage
    'home.categories.title': '主要分類',
    'home.categories.toys': '玩具',
    'home.categories.toysDesc': '探索香港特色玩具和收藏品',
    'home.categories.culture': '文創文旅',
    'home.categories.cultureDesc': '發現香港文化創意和旅遊產品',
    'home.categories.newyear': '農曆新年',
    'home.categories.newyearDesc': '新年特色禮品和裝飾',
    'home.explore': '探索產品',
    
    // Christmas page
    'christmas.subtitle': '香港特色聖誕禮品與裝飾',
    'christmas.header': '香港特色聖誕',
    'christmas.description': '在香港，聖誕節是一個充滿東西方文化交融的節日。我們提供獨特的香港風格聖誕商品，讓您的節日慶祝更具本地特色。',
    'christmas.featureTitle': '聖誕限定系列',
    'christmas.featureAlt': '香港聖誕',
    'christmas.featureDesc1': '我們的聖誕限定系列融合了西方聖誕元素與香港本地文化，創造出獨特的節日體驗。從裝飾品到禮品，每一件都充滿創意和心意。',
    'christmas.featureDesc2': '無論是送給親友還是裝飾您的家，這些產品都能讓您的聖誕節更加特別。',
    'christmas.availability': '聖誕商品將於每年10月開始上架，敬請期待！',
    
    // Culture page
    'culture.subtitle': '香港獨特的文化創意與旅遊紀念品',
    'culture.header': '探索香港文化創意',
    'culture.description': '我們精選香港本地的文化創意產品，展示本地設計師和藝術家的才華與創意。',
    'culture.featureTitle': '香港特色',
    'culture.featureAlt': '香港特色',
    'culture.featureDesc1': '從傳統到現代，我們收集了各種反映香港獨特文化和歷史的產品。每件作品都代表著香港的某一面向，講述著這座城市的故事。',
    'culture.featureDesc2': '這些產品不僅僅是紀念品，更是香港文化的載體，讓您帶回家的不只是物品，還有香港的精神與情感。',
    'culture.comingSoonTitle': '即將上架',
    'culture.comingSoonDesc': '我們正在與更多本地設計師合作，將帶來更多精彩的文創產品。敬請期待！',
    
    // Halloween page
    'halloween.subtitle': '結合香港本地文化的萬聖節商品',
    'halloween.header': '香港風格萬聖節',
    'halloween.description': '萬聖節在香港越來越受歡迎。我們融合香港本地元素與萬聖節主題，打造獨特的節日體驗。',
    'halloween.featuredTitle': '萬聖節精選',
    'halloween.category1': '裝飾品',
    'halloween.category1Desc': '結合中國傳統元素與萬聖節氣氛的獨特裝飾品。',
    'halloween.category2': '服裝道具',
    'halloween.category2Desc': '創意十足的萬聖節服裝與道具，融合東西方元素。',
    'halloween.category3': '特別版玩具',
    'halloween.category3Desc': '萬聖節限定版玩具，融合中西文化的獨特設計。',
    'halloween.availability': '萬聖節商品將於每年9月開始上架，敬請期待！',
    
    // New Year page
    'newyear.title': '農曆新年',
    'newyear.subtitle': '慶祝農曆新年的特色商品',
    'newyear.header': '迎接農曆新年',
    'newyear.description': '農曆新年是華人最重要的傳統節日，我們提供各種精美的新年裝飾和禮品，幫助您營造節日氛圍。',
    'newyear.category1': '新年飾品',
    'newyear.category1Desc': '春聯、燈籠、窗花等傳統新年裝飾，讓您的家充滿節日氣氛。',
    'newyear.category2': '新年禮盒',
    'newyear.category2Desc': '精美的禮盒包裝，內含各種傳統糖果、餅乾和茶葉，是拜訪親友的最佳選擇。',
    'newyear.category3': '限定玩具',
    'newyear.category3Desc': '以當年生肖為主題的限定版玩具和收藏品，是珍貴的紀念品。',
    'newyear.availability': '農曆新年商品將於節日前兩個月開始上架，敬請期待！',
    
    // Toys page
    'toys.subtitle': '探索香港本土玩具與熊貓限定款',
    'toys.product1.title': '毛絨熊貓玩偶',
    'toys.product1.description': '經典叮噹造型熊貓，場有可愛與抱抱',
    'toys.product2.title': '小熊貓鑰匙圈',
    'toys.product2.description': '可愛的小熊貓隨身帶，值得珍藏',
    'toys.product3.title': '亮綠袖子熊貓',
    'toys.product3.description': '亮綠迷彩袖的熊貓，超級可愛',
    'toys.product4.title': '亮黑熊貓玩具',
    'toys.product4.description': '亮黑的小熊貓色調濃烈可可用慢攤',
    'toys.product5.title': '熊貓支族玩具',
    'toys.product5.description': '毛絨雪熊雪熊雲，銀色劍光使用'
  },
  'zh-CN': {
    'nav.home': '首页',
    'nav.toys': '玩具',
    'nav.culture': '文创文旅',
    'nav.christmas': '圣诞节',
    'nav.halloween': '万圣节',
    'nav.newyear': '贺年礼品',
    'nav.about': '关于我们',
    'site.title': '香岛文化',
    'site.description': '香港本地产品的多元市集，分享香港文化与创意',
    
    // Homepage
    'home.categories.title': '主要分类',
    'home.categories.toys': '玩具',
    'home.categories.toysDesc': '探索香港特色玩具和收藏品',
    'home.categories.culture': '文创文旅',
    'home.categories.cultureDesc': '发现香港文化创意和旅游产品',
    'home.categories.newyear': '农历新年',
    'home.categories.newyearDesc': '新年特色礼品和装饰',
    'home.explore': '探索产品',
    
    // Christmas page
    'christmas.subtitle': '香港特色圣诞礼品与装饰',
    'christmas.header': '香港特色圣诞',
    'christmas.description': '在香港，圣诞节是一个充满东西方文化交融的节日。我们提供独特的香港风格圣诞商品，让您的节日庆祝更具本地特色。',
    'christmas.featureTitle': '圣诞限定系列',
    'christmas.featureAlt': '香港圣诞',
    'christmas.featureDesc1': '我们的圣诞限定系列融合了西方圣诞元素与香港本地文化，创造出独特的节日体验。从装饰品到礼品，每一件都充满创意和心意。',
    'christmas.featureDesc2': '无论是送给亲友还是装饰您的家，这些产品都能让您的圣诞节更加特别。',
    'christmas.availability': '圣诞商品将于每年10月开始上架，敬请期待！',
    
    // Culture page
    'culture.subtitle': '香港独特的文化创意与旅游纪念品',
    'culture.header': '探索香港文化创意',
    'culture.description': '我们精选香港本地的文化创意产品，展示本地设计师和艺术家的才华与创意。',
    'culture.featureTitle': '香港特色',
    'culture.featureAlt': '香港特色',
    'culture.featureDesc1': '从传统到现代，我们收集了各种反映香港独特文化和历史的产品。每件作品都代表着香港的某一面向，讲述着这座城市的故事。',
    'culture.featureDesc2': '这些产品不仅仅是纪念品，更是香港文化的载体，让您带回家的不只是物品，还有香港的精神与情感。',
    'culture.comingSoonTitle': '即将上架',
    'culture.comingSoonDesc': '我们正在与更多本地设计师合作，将带来更多精彩的文创产品。敬请期待！',
    
    // Halloween page
    'halloween.subtitle': '结合香港本地文化的万圣节商品',
    'halloween.header': '香港风格万圣节',
    'halloween.description': '万圣节在香港越来越受欢迎。我们融合香港本地元素与万圣节主题，打造独特的节日体验。',
    'halloween.featuredTitle': '万圣节精选',
    'halloween.category1': '装饰品',
    'halloween.category1Desc': '结合中国传统元素与万圣节气氛的独特装饰品。',
    'halloween.category2': '服装道具',
    'halloween.category2Desc': '创意十足的万圣节服装与道具，融合东西方元素。',
    'halloween.category3': '特别版玩具',
    'halloween.category3Desc': '万圣节限定版玩具，融合中西文化的独特设计。',
    'halloween.availability': '万圣节商品将于每年9月开始上架，敬请期待！',
    
    // New Year page
    'newyear.title': '农历新年',
    'newyear.subtitle': '庆祝农历新年的特色商品',
    'newyear.header': '迎接农历新年',
    'newyear.description': '农历新年是华人最重要的传统节日，我们提供各种精美的新年装饰和礼品，帮助您营造节日氛围。',
    'newyear.category1': '新年饰品',
    'newyear.category1Desc': '春联、灯笼、窗花等传统新年装饰，让您的家充满节日气氛。',
    'newyear.category2': '新年礼盒',
    'newyear.category2Desc': '精美的礼盒包装，内含各种传统糖果、饼干和茶叶，是拜访亲友的最佳选择。',
    'newyear.category3': '限定玩具',
    'newyear.category3Desc': '以当年生肖为主题的限定版玩具和收藏品，是珍贵的纪念品。',
    'newyear.availability': '农历新年商品将于节日前两个月开始上架，敬请期待！',
    
    // Toys page
    'toys.subtitle': '探索香港本土玩具与熊猫限定款',
    'toys.product1.title': '毛绒熊猫玩偶',
    'toys.product1.description': '经典叮当造型熊猫，充满可爱与抱抱',
    'toys.product2.title': '小熊猫钥匙圈',
    'toys.product2.description': '可爱的小熊猫随身带，值得珍藏',
    'toys.product3.title': '亮绿袖子熊猫',
    'toys.product3.description': '亮绿迷彩袖的熊猫，超级可爱',
    'toys.product4.title': '亮黑熊猫玩具',
    'toys.product4.description': '亮黑的小熊猫色调浓烈可可用慢摊',
    'toys.product5.title': '熊猫支族玩具',
    'toys.product5.description': '毛绒雪熊雪熊云，银色剑光使用'
  },
  'en': {
    'nav.home': 'Home',
    'nav.toys': 'Toys',
    'nav.culture': 'Cultural & Travel',
    'nav.christmas': 'Christmas',
    'nav.halloween': 'Halloween',
    'nav.newyear': 'New Year Gifts',
    'nav.about': 'About Us',
    'site.title': 'Island Cult',
    'site.description': 'A diverse marketplace for Hong Kong local products, sharing Hong Kong culture and creativity',
    
    // Christmas page
    'christmas.subtitle': 'Hong Kong-style Christmas gifts and decorations',
    'christmas.header': 'Hong Kong Christmas',
    'christmas.description': 'In Hong Kong, Christmas is a festival full of Eastern and Western cultural fusion. We offer unique Hong Kong-style Christmas products to make your holiday celebration more local.',
    'christmas.featureTitle': 'Christmas Limited Collection',
    'christmas.featureAlt': 'Hong Kong Christmas',
    'christmas.featureDesc1': 'Our Christmas limited collection combines Western Christmas elements with Hong Kong local culture, creating a unique holiday experience. From decorations to gifts, each item is full of creativity and thoughtfulness.',
    'christmas.featureDesc2': 'Whether you\'re giving them to friends and family or decorating your home, these products will make your Christmas more special.',
    'christmas.availability': 'Christmas products will be available from October each year. Stay tuned!',
    
    // Culture page
    'culture.subtitle': 'Hong Kong\'s unique cultural and travel souvenirs',
    'culture.header': 'Explore Hong Kong\'s Cultural Creativity',
    'culture.description': 'We select local cultural creative products from Hong Kong to showcase the talents and creativity of local designers and artists.',
    'culture.featureTitle': 'Hong Kong Features',
    'culture.featureAlt': 'Hong Kong Features',
    'culture.featureDesc1': 'From traditional to modern, we collect a variety of products reflecting Hong Kong\'s unique culture and history. Each piece represents an aspect of Hong Kong and tells a story of this city.',
    'culture.featureDesc2': 'These products are not just souvenirs, but carriers of Hong Kong culture. What you take home is not just an item, but also the spirit and emotion of Hong Kong.',
    'culture.comingSoonTitle': 'Coming Soon',
    'culture.comingSoonDesc': 'We are working with more local designers and will bring more exciting cultural creative products. Stay tuned!',
    
    // Halloween page
    'halloween.subtitle': 'Halloween items combining Hong Kong local culture',
    'halloween.header': 'Hong Kong Style Halloween',
    'halloween.description': 'Halloween is becoming increasingly popular in Hong Kong. We blend local Hong Kong elements with Halloween themes to create a unique festival experience.',
    'halloween.featuredTitle': 'Halloween Featured',
    'halloween.category1': 'Decorations',
    'halloween.category1Desc': 'Unique decorations combining traditional Chinese elements with Halloween atmosphere.',
    'halloween.category2': 'Costumes & Props',
    'halloween.category2Desc': 'Creative Halloween costumes and props, blending Eastern and Western elements.',
    'halloween.category3': 'Special Edition Toys',
    'halloween.category3Desc': 'Halloween limited-edition toys with unique designs blending Chinese and Western cultures.',
    'halloween.availability': 'Halloween products will be available from September each year. Stay tuned!',
    
    // New Year page
    'newyear.title': 'Lunar New Year',
    'newyear.subtitle': 'Special products to celebrate Lunar New Year',
    'newyear.header': 'Welcome the Lunar New Year',
    'newyear.description': 'Lunar New Year is the most important traditional festival for Chinese people. We provide a variety of beautiful New Year decorations and gifts to help you create a festive atmosphere.',
    'newyear.category1': 'New Year Decorations',
    'newyear.category1Desc': 'Spring couplets, lanterns, window paper-cuts and other traditional New Year decorations to fill your home with festive atmosphere.',
    'newyear.category2': 'New Year Gift Boxes',
    'newyear.category2Desc': 'Beautifully packaged gift boxes containing various traditional candies, cookies, and tea, ideal for visiting friends and family.',
    'newyear.category3': 'Limited Edition Toys',
    'newyear.category3Desc': 'Limited edition toys and collectibles themed around the zodiac animal of the year, making them precious souvenirs.',
    'newyear.availability': 'Lunar New Year products will be available two months before the festival. Stay tuned!',
    
    // Toys page
    'toys.subtitle': 'Explore Hong Kong local toys and panda limited editions',
    'toys.product1.title': 'Plush Panda Toy',
    'toys.product1.description': 'Classic design panda, adorable and huggable',
    'toys.product2.title': 'Panda Keychain',
    'toys.product2.description': 'Cute little panda to carry with you, worth collecting',
    'toys.product3.title': 'Green Sleeve Panda',
    'toys.product3.description': 'Panda with bright green camouflage sleeves, super cute',
    'toys.product4.title': 'Black Panda Toy',
    'toys.product4.description': 'Bright black little panda with intense color tones',
    'toys.product5.title': 'White Panda Collectible',
    'toys.product5.description': 'Plush snow bear cloud with silver sword light'
  }
};

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh-TW';
  
  const t = useMemo(() => {
    return (key: string) => {
      const localeDict = translations[locale as keyof typeof translations] || translations['zh-TW'];
      return localeDict[key as keyof typeof localeDict] || key;
    };
  }, [locale]);
  
  return { t, locale };
}
