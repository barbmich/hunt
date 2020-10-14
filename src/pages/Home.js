import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";
import ProductList from "../components/Product/ProductList";

const Home = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Hunt" />
      <IonContent color="medium" fullscreen>
        <LargeHeader title="Hunt" />
        <br />
        <ProductList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
