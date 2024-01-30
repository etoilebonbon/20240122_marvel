import { useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetCharaters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import Layout7 from "../components/Layout7";
import ScaleLoader from "react-spinners/ScaleLoader";
import Button from "../components/Button";





export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; // events fetch 요청한 배열을 받기 위한 변수
  let characters; // character fetch 요청

  // 이벤트 fetch
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  
  const {data:dataEvents, isLoading: isLoadingEvents} = useQuery(["getEvents"], apiGetEvents);
  if(!isLoadingEvents){
    events = dataEvents?.data.results;
  } 

  console.log(events);

  // 캐릭터 fetch
  const {data: dataCharacters, isLoading: isLoadingCharacters} = useQuery
  (
    ["getCharacters", {limit: 30}], 
    apiGetCharaters
    );  
  // console.log (isLoadingCharacters, dataCharacters);
    if (!isLoadingCharacters) {
      characters=dataCharacters?.data?.results;
    }
  console.log (characters);


  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox 
      imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"
      mainTitle="available now"
      subTitle="new on Marvel unlimited"
      description="Read These plus 30,000+ digital comics for $9.99 a month!"
      btnTxt="get marvel unlimited"        
      />



      {/* 이벤트 */}
      <section className="w-full flex justify-center ">
        <div className="max-w-7xl w-full grid grid-cols-[7fr_3fr]">
          {/* 1 왼쪽 */}
          <div className="w-full h-full">
            {/* 타이틀 */}
            <TitleRotate text="THE LATEST" />
            {/* 이벤트 API 불러오기 */}
            <div className="w-full bg-white">
              {events?.map((item, index)=> (
                <div className="flex justify-center border-b border-gray-500 mb-[20px] py-[20px]">
                  <div className="w-[50%]">
                    <img
                      className="w-full h-full object-cover"
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt="thumbnail_image"
                    />
                  </div>
                  <div className="w-[50%] mx-[30px] text-[20px] font-bold">
                    {item.title}
                  </div>  
                </div>
              ))}; 
            </div>
          </div>
          
          {/* 2 오른쪽 */}
          <div className="w-full h-full"></div>
        </div>
      </section>


      
          {/* 캐릭터 */}
          <TitleImageBox 
          imgUrl="https://www.hollywoodreporter.com/wp-content/uploads/2023/10/GRO-13045_R-H-2023.jpg?w=1296"
          mainTitle="on sale 1/31"
          subTitle="new  comics this week"
          description="Check out the newest Marvl comics coming out this week!"
          btnTxt="print subscription"          
          />
          {/* 캐릭터 리스트 캐러셀 */}
          {isLoadingCharacters ? ( // 
            <Layout7>
              <div className="w-full flex justify-center py-16">
                <ScaleLoader color="#36d7b7" />
              </div>
            </Layout7>            
          ) : ( 
            <ListCarousel lists={characters} />
          )}


          {/* 마블 인사이더 */}
          <section className="w-full h-80 justify-center bg-black">
            <div className="max-w-7xl w-full h-full grid grid-cols-[4fr_6fr]">
              {/* 1 왼쪽 */}
              <div className="w-full h-full">
                <div className="relative w-full h-full">
                  <img 
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ODUJDFTr1tWsSi8XvKJYDwJxT-kJqP2-oQ&usqp=CAU" alt="marvel_insider" />
                  <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-black/70">
                    <img 
                    className="w-1/2 h-1/2 object-cover"
                    src="https://cdn.marvel.com/content/u/open-html-assets/insider-sellpage/insider-logo.87df956b.png" 
                    alt="marvel_insider" />
                  </div>
                </div>
              </div>
              {/* 2 오른쪽 */}
              <div className="w-full h-full flex flex-col text-white items-center justify-center space-y-2">
                <h3 className="text-red-600 uppercase">Marvel insider</h3>
                <h4 className="text-2xl font-semibold">Watch, Earn, Redeem!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div className="py-4">
                  <Button text="join now" />
                </div>
              </div>
            </div>
          </section>
    </Layout>
  );
}
