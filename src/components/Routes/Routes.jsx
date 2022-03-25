import { CharacterDetail } from "../../pages/CharacterDetail/CharacterDetail";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Faculty } from "../../pages/Faculty/Faculty";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/house/:house" element={<Faculty />} />
                <Route
                    path="/character/:house/:id"
                    element={<CharacterDetail />}
                />
            </Route>
        </Routes>
    );
};
