const baseUrl = 'https://api.kurly.com/v1/categories'
const PRODUCT_NUM = 50
const TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYXJ0X2lkIjoiOTM5ZGE1N2QtNDdiYi00NTQwLWI1MDEtMDgyYjM4ZTI4OTAxIiwiaXNfZ3Vlc3QiOnRydWUsInV1aWQiOm51bGwsInN1YiI6bnVsbCwiaXNzIjoiaHR0cDovL21rd2ViLmFwaS5rdXJseS5zZXJ2aWNlcy92MS91c2Vycy9hdXRoL2d1ZXN0IiwiaWF0IjoxNTk3ODU2ODg3LCJleHAiOjE1OTc4NjA0ODcsIm5iZiI6MTU5Nzg1Njg4NywianRpIjoib05PVGs2VlJZa2N4bUVlRyJ9.t5Teh2HSGCPfrec4eqeruy6d9FoSzM_wW6sUOrCU7YQ'
const categories = [
  {
    id: '907',
    name: '채소',
    sub: [
      { id: '907001', name: '기본채소' },
      { id: '907002', name: '쌈·샐러드·간편채소' },
      { id: '907003', name: '브로콜리·특수채소' },
      { id: '907005', name: '콩나물·버섯류' },
      { id: '907004', name: '시금치·부추·나물' },
      { id: '907007', name: '양파·마늘·생강·파' },
      { id: '907006', name: '파프리카·피망·고추' },
    ],
  },
  {
    id: '908',
    name: '과일·견과·쌀',
    sub: [
      { id: '908006', name: '제철과일' },
      { id: '908001', name: '국산과일' },
      { id: '908002', name: '수입과일' },
      { id: '908003', name: '냉동·건과일' },
      { id: '908004', name: '견과류' },
      { id: '908005', name: '쌀·잡곡' },
    ],
  },
  {
    id: '909',
    name: '수산·해산·건어물',
    sub: [
      { id: '909001', name: '생선류' },
      { id: '909002', name: '오징어·낙지·문어' },
      { id: '909003', name: '새우·게·랍스터' },
      { id: '909004', name: '해산물·조개류' },
      { id: '909007', name: '수산가공품' },
      { id: '909005', name: '김·미역·해조류' },
      { id: '909006', name: '건어물·다시팩' },
    ],
  },
  {
    id: '910',
    name: '정육·계란',
    sub: [
      { id: '910001', name: '소고기' },
      { id: '910002', name: '돼지고기' },
      { id: '910005', name: '계란류' },
      { id: '910004', name: '닭·오리고기' },
      { id: '910003', name: '양념육·돈까스' },
      { id: '910006', name: '양고기' },
    ],
  },
  {
    id: '911',
    name: '국·반찬·메인요리',
    sub: [
      { id: '911001', name: '국·탕·찌개' },
      { id: '911002', name: '밑반찬' },
      { id: '911003', name: '김치·장아찌·젓갈' },
      { id: '911005', name: '두부·어묵·부침개' },
      { id: '911004', name: '햄·소시지·통조림' },
      { id: '911006', name: '메인요리' },
    ],
  },
  {
    id: '912',
    name: '샐러드·간편식',
    sub: [
      { id: '912001', name: '샐러드·도시락' },
      { id: '912003', name: '간편식·냉동식품' },
      { id: '912004', name: '밥류·면식품·즉석식품' },
      { id: '912002', name: '선식·시리얼·그래놀라' },
      { id: '912005', name: '만두·튀김·떡볶이' },
      { id: '912006', name: '죽·스프' },
    ],
  },
  {
    id: '913',
    name: '면·양념·오일',
    sub: [
      { id: '913001', name: '파스타·면류' },
      { id: '913002', name: '밀가루·가루·믹스' },
      { id: '913004', name: '향신료·소스·드레싱' },
      { id: '913003', name: '양념·액젓·장류' },
      { id: '913005', name: '소금·설탕·식초·꿀' },
      { id: '913006', name: '식용유·참기름·오일' },
    ],
  },
  {
    id: '914',
    name: '음료·우유·떡·간식',
    sub: [
      { id: '914001', name: '생수·음료·주스' },
      { id: '914002', name: '커피·차' },
      { id: '914003', name: '우유·두유·요거트' },
      { id: '914004', name: '아이스크림' },
      { id: '914005', name: '떡·한과' },
      { id: '914006', name: '간식·과자·쿠키' },
      { id: '914007', name: '초콜릿·젤리·캔디' },
    ],
  },
  {
    id: '915',
    name: '베이커리·치즈·델리',
    sub: [
      { id: '915001', name: '식빵·빵류' },
      { id: '915002', name: '잼·버터·스프레드' },
      { id: '915003', name: '케이크·파이·디저트' },
      { id: '915004', name: '치즈' },
      { id: '915005', name: '건조육' },
      { id: '915006', name: '올리브·피클·델리' },
    ],
  },
  {
    id: '032',
    name: '건강식품',
    sub: [
      { id: '032001', name: '건강즙·건강음료' },
      { id: '032002', name: '홍삼·인삼·꿀' },
      { id: '032003', name: '영양제' },
      { id: '032004', name: '유산균' },
      { id: '032005', name: '건강분말·건강환' },
      { id: '032007', name: '유아동' },
    ],
  },
  {
    id: '918',
    name: '생활용품·리빙',
    sub: [
      { id: '918007', name: '휴지·티슈·위생용품' },
      { id: '918008', name: '세제·청소용품' },
      { id: '918009', name: '인테리어소품' },
      { id: '918010', name: '의약외품·마스크' },
      { id: '918011', name: '생활잡화·문구' },
    ],
  },
  {
    id: '012',
    name: '뷰티·바디케어',
    sub: [
      { id: '012011', name: '스킨케어' },
      { id: '012010', name: '구강·면도' },
      { id: '012008', name: '바디·제모' },
      { id: '012009', name: '헤어케어' },
      { id: '012012', name: '미용기기·소품' },
    ],
  },
  {
    id: '916',
    name: '주방용품',
    sub: [
      { id: '916006', name: '주방소모품' },
      { id: '916007', name: '주방·조리도구' },
      { id: '916008', name: '냄비·팬류' },
      { id: '916009', name: '식기류' },
      { id: '916004', name: '컵·와인잔·사케잔' },
      { id: '916010', name: '차·커피도구' },
    ],
  },
  {
    id: '085',
    name: '가전제품',
    sub: [
      { id: '085002', name: '주방가전' },
      { id: '085001', name: '생활가전' },
    ],
  },
  {
    id: '919',
    name: '베이비·키즈',
    sub: [
      { id: '919011', name: '분유·간편 이유식' },
      { id: '919008', name: '이유식 재료' },
      { id: '919013', name: '유아·어린이 음식' },
      { id: '919012', name: '간식·음료·건강식품' },
      { id: '919009', name: '유아용품·젖병·식기류' },
      { id: '919014', name: '기저귀·물티슈' },
      { id: '919010', name: '목욕·세제·위생용품' },
      { id: '919015', name: '유아스킨·구강케어' },
    ],
  },
  {
    id: '991',
    name: '반려동물',
    sub: [
      { id: '991001', name: '강아지 간식' },
      { id: '991002', name: '강아지 주식' },
      { id: '991003', name: '고양이 간식' },
      { id: '991004', name: '고양이 주식' },
      { id: '991006', name: '반려동물 용품' },
    ],
  },
]

let result = '['
categories.forEach((category, index1) => {
  category.sub.forEach((subCateogory, index2) => {
    fetch(`${baseUrl}/${subCateogory.id}?page_limit=${PRODUCT_NUM}`, {
      headers: {
        authorization: `${TOKEN}`,
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const wantedData = {
          id: data.data.category_no,
          name: data.data.category_name,
          products: data.data.products.map((product) => {
            const {
              name,
              original_price,
              price,
              shortdesc,
              thumbnail_image_url,
              thumbnail_image_z_url,
            } = product

            return {
              name,
              originPrice: original_price,
              salePrice: price,
              salePercent: Math.round(((original_price - price) / original_price) * 100),
              hit: 0,
              amount: 20,
              isMain: false,
              description: shortdesc,
              mainImage: thumbnail_image_url,
              bannerImage: thumbnail_image_z_url,
            }
          }),
        }
        result += JSON.stringify(wantedData) + ', '

        if (index1 === categories.length - 1 && index2 === category.sub.length - 1) {
          result += ']'
          console.log(result)
        }
      })
  })
})
