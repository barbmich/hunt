import React, { useContext, useEffect, useState } from "react";
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";

import firebase from "../firebase";
import { Plugins } from "@capacitor/core";
import UserContext from "../contexts/UserContext";
import NavHeader from "../components/Header/NavHeader";
import ProductItem from "../components/Product/ProductItem";
import ProductPhotos from "../components/Product/ProductPhotos";

const { Browser } = Plugins;

const Product = (props) => {
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const productId = props.match.params.productId;
  const productRef = firebase.db.collection("products").doc(productId);

  useEffect(() => {
    getProduct();
    //eslint-disable-next-line
  }, [productId]);

  function getProduct() {
    productRef.get().then((doc) => {
      setProduct({ ...doc.data(), id: doc.id });
    });
  }

  function handleDeleteProduct() {
    productRef
      .delete()
      .then(() => {
        console.log(`Document with ID ${product.id} has been deleted`);
      })
      .catch((err) => {
        console.error("Error deleting documents:", err);
      });
    props.history.push("/");
  }

  function postedByAuthUser(product) {
    return user && user.uid === product.postedBy.id;
  }

  async function openBrowser() {
    await Browser.open({
      url: product.url,
    });
  }

  return (
    <IonPage>
      <NavHeader
        title={product && product.description}
        option={product && postedByAuthUser(product)}
        icon={closeCircleOutline}
        action={handleDeleteProduct}
      />
      <IonContent>
        {product && (
          <>
            <IonGrid>
              <IonRow>
                <IonCol class="ion-text-center">
                  <ProductItem product={product} browser={openBrowser} />
                  <ProductPhotos photos={product.photos} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Product;
