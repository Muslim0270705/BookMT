
import {Routes, Route, MemoryRouter} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./style/style.scss"
import ArithmeticOne from "./pages/Arithmetic/ArithmeticOne";
import Arithmetictwo from "./pages/Arithmetic/Arithmetictwo";
import Arithmeticthree from "./pages/Arithmetic/Arithmeticthree";
import AlgebraOne from "./pages/Algebra/AlgebraOne";
import AlgebraTwo from "./pages/Algebra/AlgebraTwo";
import AlgebraThree from "./pages/Algebra/AlgebraThree";
import AlgebraFour from "./pages/Algebra/AlgebraFour";
import Trigonometric from "./pages/ Trigonometric/Trigonometric";
import TrigonometricTwo from "./pages/ Trigonometric/TrigonometricTwo";
import TrigonometricThree from "./pages/ Trigonometric/TrigonometricThree";
import TrigonometricFour from "./pages/ Trigonometric/TrigonometricFour";
import TrigonomeFive from "./pages/ Trigonometric/TrigonomeFive";
import TrigonometricSix from "./pages/ Trigonometric/TrigonometricSix";
import TrigonometricSeven from "./pages/ Trigonometric/TrigonometricSeven";
import TrignOne from "./pages/ Trigonometric/TrignOne";
import TrignTwo from "./pages/ Trigonometric/TrignTwo";
import GeometryOne from "./pages/Geometry/GeometryOne";
import GeometryTwo from "./pages/Geometry/GeometryTwo";
import GeometryThree from "./pages/Geometry/GeometryThree";
import GeometryFour from "./pages/Geometry/GeometryFour";
import GeometryFive from "./pages/Geometry/GeometryFive";
import GeometrySix from "./pages/Geometry/GeometrySix";
import ProbabilityOne from "./pages/Probability/ProbabilityOne";
import ProbabilityTwo from "./pages/Probability/ProbabilityTwo";
import ProbabilityThree from "./pages/Probability/ProbabilityThree";
import ProbabilityFour from "./pages/Probability/ProbabilityFour";
import ProbabilityFive from "./pages/Probability/ProbabilityFive";
import ProbabilitySix from "./pages/Probability/ProbabilitySix";
import DifferentialOne from "./pages/Differential/DifferentialOne";
import DifferentialTwo from "./pages/Differential/DifferentialTwo";
import DifferentialTree from "./pages/Differential/DifferentialTree";
import DifferentialFour from "./pages/Differential/DifferentialFour";
import Mathematics from "./pages/Home/Mathematics";
function App() {
  return (
      <div className="App" >
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/arithmeticone"} element={<ArithmeticOne/>}/>
                <Route path={"/arithmetictwo"} element={<Arithmetictwo/>}/>
                <Route path={"/arithmeticthree"} element={<Arithmeticthree/>}/>
                <Route path={"/AlgebraOne"} element={<AlgebraOne/>}/>
                <Route path={"/AlgebraTwo"} element={<AlgebraTwo/>}/>
                <Route path={"/AlgebraThree"} element={<AlgebraThree/>}/>
                <Route path={"/AlgebraFour"} element={<AlgebraFour/>}/>
                <Route path={"/Trigonometric"} element={<Trigonometric/>}/>
                <Route path={"/TrigonometricTwo"} element={<TrigonometricTwo/>}/>
                <Route path={"/TrigonometricThree"} element={<TrigonometricThree/>}/>
                <Route path={"/TrigonometricFour"} element={<TrigonometricFour/>}/>
                <Route path={"/TrigonometricSix"} element={<TrigonometricSix/>}/>
                <Route path={"/TrigonometricSeven"} element={<TrigonometricSeven/>}/>
                <Route path={"/TrigonomeFive"} element={<TrigonomeFive/>}/>
                <Route path={"/TrignOne"} element={<TrignOne/>}/>
                <Route path={"/TrignTwo"} element={<TrignTwo/>}/>
                <Route path={"/GeometryOne"} element={<GeometryOne/>}/>
                <Route path={"/GeometryTwo"} element={<GeometryTwo/>}/>
                <Route path={"/GeometryThree"} element={<GeometryThree/>}/>
                <Route path={"/GeometryFour"} element={<GeometryFour/>}/>
                <Route path={"/GeometryFive"} element={<GeometryFive/>}/>
                <Route path={"/GeometrySix"} element={<GeometrySix/>}/>
                <Route path={"/ProbabilityOne"} element={<ProbabilityOne/>}/>
                <Route path={"/ProbabilityTwo"} element={<ProbabilityTwo/>}/>
                <Route path={"/ProbabilityThree"} element={<ProbabilityThree/>}/>
                <Route path={"/ProbabilityFour"} element={<ProbabilityFour/>}/>
                <Route path={"/ProbabilityFive"} element={<ProbabilityFive/>}/>
                <Route path={"/ProbabilitySix"} element={<ProbabilitySix/>}/>
                <Route path={"/DifferentialOne"} element={<DifferentialOne/>}/>
                <Route path={"/DifferentialTwo"} element={<DifferentialTwo/>}/>
                <Route path={"/DifferentialTree"} element={<DifferentialTree/>}/>
                <Route path={"/DifferentialFour"} element={<DifferentialFour/>}/>
                <Route path={"/Mathematics"} element={<Mathematics/>}/>

              </Route>
          </Routes>
      </div>
  );
}

export default App;
