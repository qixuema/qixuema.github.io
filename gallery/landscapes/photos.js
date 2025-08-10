const CDN_ORIGIN = 'https://qixuema.oss-cn-shenzhen.aliyuncs.com/gallery';
const ALBUM = 'landscapes';

const THUMBS_DIR = `${CDN_ORIGIN}/${ALBUM}/images/thumbs/`;
const FULLS_DIR  = `${CDN_ORIGIN}/${ALBUM}/images/fulls/`;

// 只需维护这个数组即可
const PHOTOS = [
  { 
    file:'Evening_Skyline_Reflection.jpg',            
    title:'Evening Skyline Reflection', 
    desc:"Pink and blue evening sky mirrored in calm water. By Salingo, 2024." 
  },
  { 
    file:'Golden_Rays_Over_City_Skyline.jpg',         
    title:'Golden Rays Over City Skyline', 
    desc:"Golden rays pierce clouds over the skyline. By Salingo, 2024." 
  },
  { 
    file:'Sunset_Glow_At_Qianhai_Bay.jpg',            
    title:'Sunset Glow At Qianhai Bay', 
    desc:"Sunset glow at Qianhai Bay. Unknown, 2024." 
  },
  { 
    file:'Parasailing_Above_the_Sea.jpg',             
    title:'Parasailing Above the Sea', 
    desc:"Colorful parasail between blue sky and glittering sea. By Yunshan, 2024." 
  },
  { 
    file:'Sunset_Reflections_on_the_City.jpg',        
    title:'Sunset Reflections on the City', 
    desc:"Purple-orange sunset reflected on city waters, distant lights, 2024." 
  },
  { 
    file:'L7_Under_Blue_Sky.jpg',                      
    title:'L7 Under Blue Sky', 
    desc:"White L7 building with square windows against blue sky." 
  },
  { 
    file:'Half_Moon_Above_Modern_Building.jpg',        
    title:'Half Moon Above Modern Building', 
    desc:"Half moon over a modern facade with light clouds, 2023." 
  },
  { 
    file:'Tranquil_Lakeside_View.jpg',                 
    title:'Tranquil Lakeside View', 
    desc:"Serene lake, dense greens opposite shore. Maojia Bu, West Lake." 
  },
  { 
    file:'Shanghai_Skyline.jpg',                       
    title:'Shanghai Skyline', 
    desc:"Oriental Pearl & skyscrapers along the Huangpu River." 
  },
  { 
    file:'Sky_On_the_Way_to_Dinner.jpg',               
    title:'On the Way to Dinner', 
    desc:"Snapshot on the way to Xuefu Road for dinner, 2024." 
  },
  { 
    file:'Lab_Trip_Coastal_Scenery_Nov2023.jpg',       
    title:'Lab Trip Coastal Scenery', 
    desc:"Coastal view from sightseeing bus, Nov 2023." 
  },
  { 
    file:'Shenzhen_University_Intersection_Clouds.jpg',
    title:'SZU Intersection Clouds', 
    desc:"Clouds above Shenzhen University intersection, 2024." 
  },
  { 
    file:'Shanghai_Night_Bank.jpg',                    
    title:'Shanghai Night Bank', 
    desc:"Night bank view from a boat. By Salingo, 2023." 
  },
  { 
    file:'Shanghai_Nightscape.jpg',                    
    title:'Shanghai Nightscape', 
    desc:"Illuminated skyline at night from a boat. By Salingo, 2023." 
  },
  { 
    file:'View_from_Airplane_Window.jpg',              
    title:'View from Airplane Window', 
    desc:"Layers of white clouds and light blue sky, 2023." 
  },
  { 
    file:'Mount_Zhongtiao_from_Train.jpg',             
    title:'Mount Zhongtiao captured from a train, 2023' 
  },
  { 
    file:'Plane_and_Moon_in_Sky.jpg',                  
    title:'A plane and the moon in the sky, 2023' 
  },
  { 
    file:'Aerial_City_View_from_Airplane.jpg',         
    title:'city, airplane, clouds', 
    desc:"Aerial city view from airplane window, 2022." 
  },
  { 
    file:'Yunqi_Zhujing_Entrance.jpg',                 
    title:'Yunqi Zhujing', 
    desc:"Entrance with tea trees and forested hills." 
  },
  { 
    file:'Hangzhou_Xiang_Lake_After_Rain.jpg',         
    title:'Xiang Lake', 
    desc:"Hangzhou Xiang Lake after rain." 
  },
  { 
    file:'Winter_Magpie_Nest.jpg',                     
    title:'Winter Magpie Nest', 
    desc:"A magpie's nest photographed in winter." 
  },
  { 
    file:'Autumn_Jiuxi_Yanshu_Hangzhou.jpg',           
    title:'Jiuxi Yanshu', 
    desc:"Autumn at Jiuxi Yanshu, Hangzhou." 
  },
  { 
    file:'Panoramic_View_West_Lake_Baoshi_Mountain.jpg',
    title:'West Lake', 
    desc:"Panoramic view from Baoshi Mountain." 
  },
  { 
    file:'Morning_Transfer_in_Luoyang.jpg',            
    title:'Morning Transfer in Luoyang', 
    desc:"Second time in Luoyang—just a fleeting visit, 2023." 
  },
  { 
    file:'Distant_Zhongtiao_Mountain_Summer2023.jpg',  
    title:'Zhongtiao Mountain', 
    desc:"Gazing at distant Zhongtiao Mountain, summer 2023." 
  },
  { 
    file:'Liangzhu_Ruins.jpeg',                        
    title:'Liangzhu', 
    desc:"The Liangzhu Ruins in winter." 
  },
  { 
    file:'Gongchen_Bridge.jpg',                        
    title:'Gongchen Bridge', 
    desc:"Hangzhou." 
  },
  { 
    file:'Yun_Qi_Zhu_Jing.jpg',                        
    title:'Yun Qi Zhu Jing', 
    desc:"Hangzhou." 
  },
  { 
    file:'Stream_at_Yun_Qi_Zhu_Jing.jpg',              
    title:'Stream', 
    desc:"Hangzhou, Yun Qi Zhu Jing." 
  },
  { 
    file:'Shenzhen_Wutong_Mountain_TV_Tower.jpg',      
    title:'Shenzhen TV Tower', 
    desc:"Wutong Mountain TV Tower, Shenzhen." 
  },
  { 
    file:'Sunset_Airplane_Wing.jpg',                   
    title:'Airplane Wing', 
    desc:"Sunset through clouds under the wing, 2023." 
  },
  { 
    file:'Dapeng_Seaside.jpg',                         
    title:'Da Peng', 
    desc:"Shenzhen, Nov 2023." 
  }
];
