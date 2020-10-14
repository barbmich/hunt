import React from "react";
import { withRouter } from "react-router-dom";
import {
  IonItem,
  IonCard,
  IonCardContent,
  IonThumbnail,
  IonLabel,
  IonImg,
  IonList,
} from "@ionic/react";

const ProductItem = ({ product, url, browser }) => {
  return (
    <IonCard routerLink={url} onClick={browser}>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={product.thumbnail} />
            </IonThumbnail>
            <IonLabel>
              <div className="ion-text-wrap">
                <strong style={{ fontSize: "1rem" }}>{product.title}</strong>
              </div>
              <div className="ion-text-wrap" style={{ fontSize: "0.8rem" }}>
                {product.description}
              </div>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default withRouter(ProductItem);
