"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const data = [
      {
        name: "임시",
        address: "서울특별시 노원구 공릉동 408-112",
        lat: 37.324467,
        lng: 127.094711,
        id: 1,
        major: "몰라",
      },
      {
        name: "임시2",
        address: "서울특별시 노원구 공릉동 408-118",
        lat: 37.344467,
        lng: 127.094733,
        id: 2,
        major: "몰라",
      },
    ];
    const loadMap = () => {
      const mainLocation = new naver.maps.LatLng(37.402345, 127.101222);

      const mapOptions = {
        center: mainLocation,
        scaleControl: false,
        mapDataControl: false,
        zoom: 12,
      };

      const map = new naver.maps.Map("map", mapOptions);
      //@ts-ignore
      mapRef.current = map;

      // 현재 위치
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const currentLocation = new naver.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          console.log(currentLocation);
          //@ts-ignore
          mapRef.current.setCenter(currentLocation);

          new naver.maps.Marker({
            position: currentLocation,
            map: map,
            title: "Your Location",
            icon: {
              url: "/good.png",
              size: new naver.maps.Size(50, 63),
              scaledSize: new naver.maps.Size(50, 63),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(12, 37),
            },
          });
        });
      }

      // 마커 저장 로직
      data.forEach((e) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(e.lat, e.lng),
          map: map,
          title: e.name,
          icon: {
            url: "/bad.png",
            size: new naver.maps.Size(40, 40),
            scaledSize: new naver.maps.Size(40, 40),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 37),
          },
        });

        // 마커 클릭 시 해당 장소 정보 이동
        // naver.maps.Event.addListener(marker, "click", () => {
        //   setSelectedHospitalId(
        //     //@ts-ignore
        //     selectedHospitalId === e.id ? null : e.id
        //   );
        //   //setSelectedMarkerPosition(marker.getPosition());
        //   setModalContent({
        //     //@ts-ignore
        //     name: e.name,
        //     major: e.major,
        //     address: e.address,
        //     //closeTime: hospital.closeTime,
        //   });
        //   //@ts-ignore
        //   setRememberedMarkerPosition(marker.getPosition());
        //   setIsModalOpen(true);
        // });
      });

      setIsMapLoaded(true);
    };

    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement("script");
      mapScript.onload = loadMap;
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return (
    <>
      <Header />
      <div id="map" className="w-full h-full ">
        {isMapLoaded && <p>지도를 준비 중입니다!</p>}
      </div>
      <Footer />
    </>
  );
}
