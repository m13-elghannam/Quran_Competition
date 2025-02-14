import Button from "../components/ButtonComponent";
import floralDesign from "../media/floralDesign.png";
import competitionLogo from "../media/competitionLogo.png";

function HomePage() {
  let buttonsStyle = {
    border: "1.6px solid saddlebrown",
    color: "saddlebrown",
  };
  return (
    <main id="homePage">
      <img src={floralDesign} alt="" floralDesign id="mainFlower" />
      <section id="levelSelection">
        <h1>اختار المستوى</h1>
        <div id="buttons">
          <Button Text="القرآن كامل" Value="allQuran" style={buttonsStyle} />
          <div>
            <Button Text="نصف القرآن" Value="halfQuran" style={buttonsStyle} />
            <Button Text="عشرون جزء" Value="twentyParts" style={buttonsStyle} />
          </div>
          <div>
            <Button Text="عشرة اجزاء" Value="tenParts" style={buttonsStyle} />
            <Button Text="خمسة اجزاء" Value="fiveParts" style={buttonsStyle} />
          </div>
          <div>
            <Button
              Text="ثلاثة اجزاء"
              Value="threeParts"
              style={buttonsStyle}
            />
            <Button Text="جزء واحد" Value="onePart" style={buttonsStyle} />
          </div>
        </div>
      </section>
      <aside>
        <img src={competitionLogo} alt="competitionLogo" id="competitionLogo" />
        <p>
          إِنَّ ٱلَّذِينَ كَفَرُوا سَوَآءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ أَمْ لَمْ
          تُنذِرْهُمْ لَا يُؤْمِنُونَ (٦) خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ
          وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰٓ أَبْصَـٰرِهِمْ غِشَـٰوَةٌ وَلَهُمْ
          عَذَابٌ عَظِيمٌ (٧) وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا
        </p>
        <img src={floralDesign} alt="floralDesign" id="sideFlower" />
      </aside>
      <img src={floralDesign} alt="floralDesign" id="sideFlower2" />
    </main>
  );
}

export default HomePage;
