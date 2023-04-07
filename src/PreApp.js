import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layouts
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header/Header";
//pages
import Homepage from "./pages/Homepage";
import ClassicPage from "./pages/ClassicsPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./comps/NotFound/NotFound";
import SignIn from "./comps/SignIn/SignIn";
import SignUp from "./comps/SignUp/SignUp";
import Reset from "./comps/Reset/Reset";
import Coin from "./pages/games/CoinFlipGame";
import Dice from "./pages/games/ToDiceGame";
import Rps from "./pages/games/RpsGame";
import Easy from "./pages/games/EasySlotGame";
import Medium from "./pages/games/MediumSlotGame";
import Hard from "./pages/games/HardSlotGame";
import Roulette from "./pages/games/RouletteGame";
//comps
import Scoreboard from "./comps/Scoreboard/Scoreboard";
import Slot from "./comps/Slot/SlotGame";
//emoji
import EmojiGame from "./comps/Emoji/Emoji";
import LolEmoji from "./comps/Emoji/Lol";
import ValoEmoji from "./comps/Emoji/Valorant";
import TurkeyEmoji from "./comps/Emoji/Turkey";
import CountryEmoji from "./comps/Emoji/Country";
import QuizBox from "./comps/QuizzBox/Box";
import ValorantQuizBox from "./comps/QuizzBox/Agents";
import Contact from "./comps/Contact/Contact";
import Welcome from "./comps/Welcome/Welcome";
function PreApp() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leaderboard" element={<Scoreboard />} />
        <Route path="/classics" element={<ClassicPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/coinflip" element={<Coin />} />
        <Route path="/todice" element={<Dice />} />
        <Route path="/rps" element={<Rps />} />
        <Route path="/slot" element={<Slot />} />
        <Route path="/slot/muhterem" element={<Hard />} />
        <Route path="/slot/cakir" element={<Medium />} />
        <Route path="/slot/abidin" element={<Easy />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/emojify" element={<EmojiGame />} />
        <Route path="/emojify/lol" element={<LolEmoji />} />
        <Route path="/emojify/valorant" element={<ValoEmoji />} />
        <Route path="/emojify/turkish-cities" element={<TurkeyEmoji />} />
        <Route path="/emojify/countries" element={<CountryEmoji />} />
        <Route path="/quizboxes" element={<QuizBox />} />
        <Route path="/quizboxes/valorant" element={<ValorantQuizBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default PreApp;
