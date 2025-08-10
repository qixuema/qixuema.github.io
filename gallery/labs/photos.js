const CDN_ORIGIN = 'https://qixuema.oss-cn-shenzhen.aliyuncs.com/gallery';
const ALBUM = 'labs';

const THUMBS_DIR = `${CDN_ORIGIN}/${ALBUM}/images/thumbs/`;
const FULLS_DIR  = `${CDN_ORIGIN}/${ALBUM}/images/fulls/`;

// 只维护这个数组即可
const PHOTOS = [
  // 2024
  {
    file: 'Lab_Group_Photo_Shenzhen_University_1.jpeg'
  },
  {
    file: 'Lab_Group_Photo_Shenzhen_University_2.jpeg'
  },
  {
    file: 'Lab_Group_Photo_Shenzhen_University_3.jpg'
  },
  {
    file: 'Haidilao_Gathering_Summer2024.jpg',
    title: 'Haidilao Gathering Summer 2024',
    desc: 'Before the summer vacation in 2024, we had a gathering at Haidilao.'
  },
  {
    file: 'Farewell_ChenHe.jpg',
    title: 'Farewell Chen He'
  },
  {
    file: 'Yudong_and_Zejia.jpg',
    title: 'Farewell Yudong and Zejia'
  },
  {
    file: 'Lab_Group_Photo_Shenzhen_University_4.jpg'
  },
  {
    file: 'Farewell_Zihao.jpg',
    title: 'Farewell, Zihao'
  },
  {
    file: '2024_Graduates_Farewell_BBQ.jpg',
    title: 'Farewell 2024',
    desc: '2024 farewell BBQ.'
  },
  {
    file: 'Summer_2024_Graduates_Farewell.jpg',
    title: 'Farewell 2024',
    desc: 'Summer 2024 farewell for graduates.'
  },
  {
    file: 'Spring_Mountain_Climbing.jpg',
    title: 'Nan Mountain Climbing'
  },
  {
    file: 'A_Gathering_Before_the_Spring_Festival.jpg',
    title: 'Gathering Before the Spring Festival'
  },
  {
    file: 'SIG_2024.jpg',
    title: 'SIG 2024'
  },

  // 2023
  {
    file: 'Meal_with_Professor_Jianwei-Guo.jpg',
    title: 'Meal with Professor Jianwei-Guo',
    desc: 'Having a meal with Prof. Jianwei Guo at Xiao Nv Dang Jia'
  },
  {
    file: 'Christmas_2023.jpg',
    title: '2023 Merry Christmas'
  },
  {
    file: 'Tug-of-War_Winter_2023_Group.jpg',
    title: 'Tug-of-War Group, 2023'
  },
  {
    file: 'Tug-of-War_Winter_2023.jpg',
    title: 'Tug-of-War, 2023'
  },
  {
    file: 'Autumn_Outing_JuDiaoSha.jpg',
    title: 'Autumn Outing JuDiaoSha',
    desc: 'Playing the game of guessing song titles with friends.'
  },
  {
    file: 'Shanghai_CADCG_Conference_2023.jpg',
    title: '2023 CAD/CG Shanghai',
    desc: 'Listening to presentations with senior colleagues at the conference.'
  },
  {
    file: '2023_Graduates_Farewell_BBQ.jpg',
    title: 'Farewell 2023',
    desc: '2023 farewell BBQ.'
  },
  {
    file: 'Summer_2023_Graduates_Farewell.jpg',
    title: 'Farewell 2023',
    desc: 'Summer 2023 farewell for graduates.'
  },
  {
    file: 'A_Gathering_2023Summer.jpg',
    title: 'Gathering',
    desc: 'Summer 2023.'
  },
  {
    file: 'SIGA_2023.jpg',
    title: '2023 SIGGRAPH Asia'
  },

  // 2022
  {
    file: 'Tug-of-War_Winter_2022_Group.jpg',
    title: 'Tug-of-War Group, 2022'
  },
  {
    file: 'Tug-of-War_Winter_2022.jpg',
    title: 'Tug-of-War, 2022'
  },
  {
    file: '2022_Welcome_New_Students.jpg',
    title: '2022 Welcome New Students',
    desc: 'Starting My PhD Journey.'
  },
  {
    file: 'Dalian_CADCG_Conference_2022.jpg',
    title: '2022 CAD/CG Dalian',
    desc: 'Group photo at the 2022 CAD/CG conference in Dalian.'
  },
  {
    file: 'Dinner_At_Dalian.jpg',
    title: 'Dinner At Dalian, 2022'
  },
  {
    file: 'Farewell_Dinner_for_Jiahui_and_Xingguang.jpg',
    title: 'Jiahui and Xingguang',
    desc: 'Farewell dinner, 2022, Shenzhen.'
  },
  {
    file: 'Summer_2022_Graduates_Farewell.jpg',
    title: 'Farewell 2022',
    desc: 'Summer 2022 farewell for graduates.'
  },

  // 2021
  {
    file: 'Tug-of-War_Winter_2021_Group.jpg',
    title: 'Tug-of-War Group, 2021'
  },
  {
    file: 'Tug-of-War_Winter_2021.jpg',
    title: 'Tug-of-War, 2021'
  }
];
