(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76",
  "this.Image_E0DACE35_F912_E7E9_41E0_6098AFEA2915",
  "this.Image_E3D12828_F931_EBE6_41E1_D9327D139610"
 ],
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "idleSequence": "this.sequence_EE02E45F_FF34_0973_41DE_ADF19B10DECA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE02945F_FF34_0973_41ED_B9641C44432A",
 "initialSequence": "this.sequence_EE02E45F_FF34_0973_41DE_ADF19B10DECA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.55,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF0B704E_FF34_0955_41ED_385E95967EE4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF0B604E_FF34_0955_41C2_D592599402B9",
 "initialSequence": "this.sequence_EF0B704E_FF34_0955_41ED_385E95967EE4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF25F030_FF34_08CC_41EE_7D9FA6116218",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF25E030_FF34_08CC_41BE_7FC7E9DFD6A0",
 "initialSequence": "this.sequence_EF25F030_FF34_08CC_41EE_7D9FA6116218",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 113.14,
  "class": "PanoramaCameraPosition",
  "pitch": -13.22
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 20",
 "id": "panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE",
 "overlays": [
  "this.overlay_CF64482F_C118_0723_41D9_E0FCB49B98EC",
  "this.overlay_E89713D8_C45D_7005_41E3_D574EB6F615D",
  "this.overlay_ED194C6F_C45B_901B_41D6_5234AD54984E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE4BC492_FF34_09CC_41E2_2D8708F9B087",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE4BF492_FF34_09CC_41C2_DA98559852B6",
 "initialSequence": "this.sequence_EE4BC492_FF34_09CC_41E2_2D8708F9B087",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.43,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEBAD49C_FF34_09F4_41E1_12DF6AC70C7B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEBAC49C_FF34_09F4_41E7_BFC4CC6B5967",
 "initialSequence": "this.sequence_EEBAD49C_FF34_09F4_41E1_12DF6AC70C7B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -125.63,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED1621F5_FF34_0B34_41E6_15DA3CC97C86",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED16C1F5_FF34_0B34_41EA_377B752183CA",
 "initialSequence": "this.sequence_ED1621F5_FF34_0B34_41E6_15DA3CC97C86",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 137.39,
  "class": "PanoramaCameraPosition",
  "pitch": 8.82
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE58C135_FF34_0B34_41CB_065CC2830D8B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE58F135_FF34_0B34_41D6_3187F265C0E4",
 "initialSequence": "this.sequence_EE58C135_FF34_0B34_41CB_065CC2830D8B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE7E5122_FF34_08CD_41D5_3DE6A27C2EE1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE7E7122_FF34_08CD_41C1_6B21A6D21BB5",
 "initialSequence": "this.sequence_EE7E5122_FF34_08CD_41D5_3DE6A27C2EE1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 168.24,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "idleSequence": "this.sequence_EF70239F_FF34_0FF4_41CE_F30623729B90",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF70D39F_FF34_0FF4_41BC_30209DA84936",
 "initialSequence": "this.sequence_EF70239F_FF34_0FF4_41CE_F30623729B90",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.2,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFC5243F_FF34_0934_41EA_DB07F293B667",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFC5D43F_FF34_0934_41D5_0F35A99FBF47",
 "initialSequence": "this.sequence_EFC5243F_FF34_0934_41EA_DB07F293B667",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF68506D_FF34_0954_41D8_0F42F767B680",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF68706D_FF34_0954_41C0_7C8932A06238",
 "initialSequence": "this.sequence_EF68506D_FF34_0954_41D8_0F42F767B680",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFEE642B_FF34_08DC_41D7_59EEFE591EBF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFEE142B_FF34_08DC_41E1_859D98EBF080",
 "initialSequence": "this.sequence_EFEE642B_FF34_08DC_41D7_59EEFE591EBF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 02",
 "id": "panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8",
 "overlays": [
  "this.overlay_EE372F91_C44A_9007_41E3_36C73A3DDB61",
  "this.overlay_EF956B1D_C44B_F03F_41DE_B06B8433867E",
  "this.overlay_EFB10C20_C44A_B005_41DB_FBD73F9E117F",
  "this.overlay_E86064AE_C44A_901D_41E6_DFD3F50D4F66"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE1DE10E_FF34_08D4_41D5_7AF155B2FDE3",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE1D910E_FF34_08D4_41CB_DFDD9B1ABF80",
 "initialSequence": "this.sequence_EE1DE10E_FF34_08D4_41D5_7AF155B2FDE3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -56.57,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEA414A6_FF34_09D4_41AC_F3D78329FFE6",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEA404A6_FF34_09D4_41E4_69A66A8EDCC5",
 "initialSequence": "this.sequence_EEA414A6_FF34_09D4_41AC_F3D78329FFE6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 133.71,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE95E174_FF34_0B34_41EC_3B3AF50CBC13",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE945174_FF34_0B34_41D2_4577285FCB76",
 "initialSequence": "this.sequence_EE95E174_FF34_0B34_41EC_3B3AF50CBC13",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 161.63,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDEC726E_FF34_0954_41A9_063A760827C8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDEC126E_FF34_0954_41D3_EFE4ACFB15A8",
 "initialSequence": "this.sequence_EDEC726E_FF34_0954_41A9_063A760827C8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 167.51,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEE491B0_FF34_0BCD_41B5_52123EF75C9D",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEE481B0_FF34_0BCD_41C0_BFE28CB75DE3",
 "initialSequence": "this.sequence_EEE491B0_FF34_0BCD_41B5_52123EF75C9D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 144.73,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDA2D23C_FF34_0934_41D1_C0D367149EAD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDA2F23C_FF34_0934_41E7_B6B1CB8F2BE6",
 "initialSequence": "this.sequence_EDA2D23C_FF34_0934_41D1_C0D367149EAD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.24,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0BBDFA3_FF34_37CC_41E5_EE3723D5FE9A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0BBAFA3_FF34_37CC_41B2_238058553ECE",
 "initialSequence": "this.sequence_F0BBDFA3_FF34_37CC_41E5_EE3723D5FE9A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 43.35,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 22",
 "id": "panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A",
 "overlays": [
  "this.overlay_CF49F93E_C118_7909_41E7_A4D9DD104DF6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EF324362_FF34_0F4D_41E3_C37A490A1229",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF327362_FF34_0F4D_41DC_C99EAC565C5E",
 "initialSequence": "this.sequence_EF324362_FF34_0F4D_41E3_C37A490A1229",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.94,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE9464C4_FF34_0955_41D5_919BC935CE77",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE9404C4_FF34_0955_41E8_2BE5E98D8F24",
 "initialSequence": "this.sequence_EE9464C4_FF34_0955_41D5_919BC935CE77",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -142.53,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 03",
 "id": "panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF",
 "overlays": [
  "this.overlay_AFC8AC42_A220_1C7B_41B4_E0990CC150ED",
  "this.overlay_ACA4C9B1_A220_241F_41C7_FE1E46C2DC48"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED1C2552_FF34_0B4C_419A_E94504782A6B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED1CC552_FF34_0B4C_41EF_85CBE388B48F",
 "initialSequence": "this.sequence_ED1C2552_FF34_0B4C_419A_E94504782A6B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.59,
  "class": "PanoramaCameraPosition",
  "pitch": 9.55
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0D3A330_FF34_08CC_41E1_F45D8AC82E91",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0D25330_FF34_08CC_41EE_78D85947662C",
 "initialSequence": "this.sequence_F0D3A330_FF34_08CC_41E1_F45D8AC82E91",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 137.39,
  "class": "PanoramaCameraPosition",
  "pitch": 8.82
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 01",
 "id": "panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5",
 "overlays": [
  "this.overlay_EEB0A569_C445_F007_41D4_E8E21378AF93",
  "this.overlay_EE2FC00E_C446_F01D_41B5_7CB79979C8D2",
  "this.overlay_EF87B5DC_C44F_903D_41B6_14829B45EBEC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 17",
 "id": "panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4",
 "overlays": [
  "this.overlay_CEE12568_C0E8_09C2_41DC_B742C4CC1086",
  "this.overlay_CE30A5C9_C0E8_08C0_41D7_AFC0E4651042"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED335529_FF34_08DF_41E5_E6A999214B7F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED336529_FF34_08DF_41E1_A80548784B3D",
 "initialSequence": "this.sequence_ED335529_FF34_08DF_41E5_E6A999214B7F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.57,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 08",
 "id": "panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB",
 "overlays": [
  "this.overlay_F65C659A_C45B_B005_41E2_8E198722F233",
  "this.overlay_F7797B97_C45A_F00C_41B3_910A17D5515B",
  "this.overlay_F07E879D_C45F_903F_41C1_1324BC37B740"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE539F52_FF34_374D_41D3_B0C927B6CB5A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE527F52_FF34_374D_41E1_7F5AA676BBC8",
 "initialSequence": "this.sequence_EE539F52_FF34_374D_41D3_B0C927B6CB5A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 162.37,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEF4B19C_FF34_0BF4_41CF_43297A363EEB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEF4A19C_FF34_0BF4_41E6_20EDEC8F87E0",
 "initialSequence": "this.sequence_EEF4B19C_FF34_0BF4_41CF_43297A363EEB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.24,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 06",
 "id": "panorama_A8A78F72_A220_1C3E_41CB_69834D123426",
 "overlays": [
  "this.overlay_ACF8568F_A260_2C11_41CB_4D34BBB34A78",
  "this.overlay_AD729937_A260_6470_41DB_09096429053B",
  "this.overlay_CD345AFF_C0E8_3829_41A8_9330863D0B86"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 09",
 "id": "panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67",
 "overlays": [
  "this.overlay_ACC7D2A7_A260_2462_41A5_3BDF85B9A889",
  "this.overlay_CD379DAE_C0F8_18F4_41D2_E722A9EEFD2B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EF24E376_FF34_0F35_4177_259A94077C32",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF24B376_FF34_0F35_41CF_05418B873089",
 "initialSequence": "this.sequence_EF24E376_FF34_0F35_4177_259A94077C32",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 14",
 "id": "panorama_A85BA869_A220_642A_41A6_32FCBD974DCD",
 "overlays": [
  "this.overlay_CEB1158E_C0F8_0978_41E2_11FC0C90BBE4",
  "this.overlay_CE409298_C0F8_0B67_41E4_3B736B748EE8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11. Sundar02",
 "id": "panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C",
 "overlays": [
  "this.overlay_E43E80AC_C4C6_901D_41A3_9F40C695477B",
  "this.overlay_E72FEA1B_C4C6_903B_41C1_53A334B2FAC6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 03",
 "id": "panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F",
 "overlays": [
  "this.overlay_E9F11374_C445_900D_41DA_3F9F013307A6",
  "this.overlay_E991177E_C47A_B0FD_41DF_9BB2C8998A95"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0E62FF4_FF34_3734_41E0_75937F6441FB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0E60FF4_FF34_3734_41A4_811BCA6C362F",
 "initialSequence": "this.sequence_F0E62FF4_FF34_3734_41E0_75937F6441FB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.8,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED12E548_FF34_0B5C_41E5_5071283214B4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED12B548_FF34_0B5C_41DF_6EE919893B71",
 "initialSequence": "this.sequence_ED12E548_FF34_0B5C_41E5_5071283214B4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE8654CE_FF34_0955_41DF_42181AB73159",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE8664CE_FF34_0955_41C4_0BC624A67964",
 "initialSequence": "this.sequence_EE8654CE_FF34_0955_41DF_42181AB73159",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 54.37,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Gopal 360 06",
 "id": "panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D",
 "overlays": [
  "this.overlay_D5805745_C45B_900F_41E4_7BE837AA9BFC",
  "this.overlay_D66C2E25_C445_900F_41C4_7656A17C1DA2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_t.jpg",
 "hfovMax": 133
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED50021D_FF34_08F7_41E5_B056280B3327",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED50D21D_FF34_08F7_41EE_93EE429FA86A",
 "initialSequence": "this.sequence_ED50021D_FF34_08F7_41E5_B056280B3327",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.71,
  "class": "PanoramaCameraPosition",
  "pitch": -17.63
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "13. Panvati 360 02 02",
 "id": "panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF",
 "overlays": [
  "this.overlay_E3C1AF43_C4CE_B00B_41E7_78820B061852",
  "this.overlay_E3FA8065_C4CA_B00F_41E4_081BC0C01BAF",
  "this.overlay_EC2852AA_C44B_7005_41CB_DF1A06917FD8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF9A9402_FF34_08CD_41EC_0E8FD10EEFCE",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF9AB402_FF34_08CD_41E4_2EF0E1838AB0",
 "initialSequence": "this.sequence_EF9A9402_FF34_08CD_41EC_0E8FD10EEFCE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.63,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE6EE12A_FF34_08DD_41EA_20C01D93D6B5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE6E912A_FF34_08DD_41E1_C54A3E421DBB",
 "initialSequence": "this.sequence_EE6EE12A_FF34_08DD_41EA_20C01D93D6B5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF93A0A9_FF34_09DF_41B6_369B3E906356",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF9250A9_FF34_09DF_41D4_73C863DCE452",
 "initialSequence": "this.sequence_EF93A0A9_FF34_09DF_41B6_369B3E906356",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.63,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE7F1F40_FF34_374C_41E3_37DD8BC340C9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE7FEF40_FF34_374C_41E7_25351A1C82DF",
 "initialSequence": "this.sequence_EE7F1F40_FF34_374C_41E3_37DD8BC340C9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 19.1,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFE29421_FF34_08CC_41EC_9847E5BEB034",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFE2B421_FF34_08CC_41DB_3C4D5B217938",
 "initialSequence": "this.sequence_EFE29421_FF34_08CC_41EC_9847E5BEB034",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.2,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3432908_C4C7_7005_41E4_68FAA7254296_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEC09515_FF34_08F7_41E7_CB2140102661",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEC0B515_FF34_08F7_41C6_3CF6ECA11167",
 "initialSequence": "this.sequence_EEC09515_FF34_08F7_41E7_CB2140102661",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 19.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 19",
 "id": "panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38",
 "overlays": [
  "this.overlay_CF3006F2_C118_0B2B_41B3_28CAEF129723",
  "this.overlay_CE0A2007_C118_06EA_41D0_3C618EF0653A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EFA6709F_FF34_09F4_41DA_F661820C0DD5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFA6609F_FF34_09F4_41E5_DD0F3640516F",
 "initialSequence": "this.sequence_EFA6709F_FF34_09F4_41DA_F661820C0DD5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 10",
 "id": "panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3",
 "overlays": [
  "this.overlay_ACD55C68_A260_1CE3_41E3_3B7F841291A1",
  "this.overlay_CED76F52_C0F9_F9A6_41DF_E69A80D5C7D5",
  "this.overlay_DC0F7AF0_C446_9005_4170_8DB253EB5092"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11. Sundar 360 07",
 "id": "panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5",
 "overlays": [
  "this.overlay_DEA1EF99_C43B_B007_41C8_58FA667B76BA",
  "this.overlay_DF0052F0_C43A_B005_41E6_A58F6EDA6E13",
  "this.overlay_DEB6EC44_C43A_B00D_41D7_03B49498B8D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Gopal 360 04",
 "id": "panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0",
 "overlays": [
  "this.overlay_D6BDEED3_C447_700B_41A9_BFECE2403D7F",
  "this.overlay_D7C33690_C44A_B005_418A_797462D41155",
  "this.overlay_D1E644EA_C44A_9005_41C5_BAA003B3977A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EC0912AB_FF34_09DC_41EE_5847ED64660C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC0902AB_FF34_09DC_41ED_CE23904DB619",
 "initialSequence": "this.sequence_EC0912AB_FF34_09DC_41EE_5847ED64660C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -144,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 08",
 "id": "panorama_A85B6467_A220_EC25_41D5_724B2DE821B4",
 "overlays": [
  "this.overlay_AC8B42BD_A26F_E465_41CF_C47B81F2CF14",
  "this.overlay_CD4287F9_C0E8_0845_41C1_A8A9F4409465"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 11",
 "id": "panorama_A8510386_A220_24E7_41C5_C72999B28587",
 "overlays": [
  "this.overlay_ACFE315F_A260_24D9_41E0_66969BE2098C",
  "this.overlay_CED9242C_C0F8_0FE8_41A3_0546CD86457A",
  "this.overlay_D2720191_C446_9007_41E1_0E2AF9024A15"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EC3F728C_FF34_09D5_41E8_6B9477B25934",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC3F128C_FF34_09D5_41E4_EBF59B08B5FD",
 "initialSequence": "this.sequence_EC3F728C_FF34_09D5_41E8_6B9477B25934",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0F2CFDF_FF34_3773_41EA_416144773FE8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0F2DFDF_FF34_3773_41C6_8F60F7F1B49D",
 "initialSequence": "this.sequence_F0F2CFDF_FF34_3773_41EA_416144773FE8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 172.65,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 09",
 "id": "panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA",
 "overlays": [
  "this.overlay_E8ADB2D0_C445_9005_41E8_3A0488AF4E3F",
  "this.overlay_E8AA5378_C446_B005_41E1_2428FC0F19A3",
  "this.overlay_E8146B4F_C447_901B_41E5_3902415A1980"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EF76B058_FF34_097D_41A9_33DEAA7DA3DE",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF76A058_FF34_097D_41B5_FA1399CEF85F",
 "initialSequence": "this.sequence_EF76B058_FF34_097D_41A9_33DEAA7DA3DE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.84,
  "class": "PanoramaCameraPosition",
  "pitch": 11.76
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A856030D_A220_65EA_41E3_78590B588A1B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFB713E4_FF34_0F55_41EF_5C9DD03A7B62",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFB703E4_FF34_0F55_41E4_B08E70A83B6D",
 "initialSequence": "this.sequence_EFB713E4_FF34_0F55_41EF_5C9DD03A7B62",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFA303EE_FF34_0F55_41DB_9D80433432AF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFA323EE_FF34_0F55_41DD_A12578981AE1",
 "initialSequence": "this.sequence_EFA303EE_FF34_0F55_41DB_9D80433432AF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -162.37,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 16",
 "id": "panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685",
 "overlays": [
  "this.overlay_AC9F9A67_A260_E4FA_41D2_742A26A60218",
  "this.overlay_CEF110BF_C0F8_08A0_41E0_0C5FACFC06E7",
  "this.overlay_CD791981_C0F8_795A_41D3_7B2DA9FFF0DA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EFC610E6_FF34_0954_41DE_51A36F561F1B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFC630E6_FF34_0954_41D1_1AFF77176BD1",
 "initialSequence": "this.sequence_EFC610E6_FF34_0954_41DE_51A36F561F1B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.76,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF7CC3A9_FF34_0FDC_41E6_7F482C842934",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF7CE3A9_FF34_0FDC_41E5_8D556CDC8A84",
 "initialSequence": "this.sequence_EF7CC3A9_FF34_0FDC_41E6_7F482C842934",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.06,
  "class": "PanoramaCameraPosition",
  "pitch": 9.55
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0E3C312_FF34_08CC_41E4_B2F56D2F9369",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0E3F312_FF34_08CC_41E3_89D06288C5E3",
 "initialSequence": "this.sequence_F0E3C312_FF34_08CC_41E4_B2F56D2F9369",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0BCCFAD_FF34_37D4_41E9_D463588507C0",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0BCDFAD_FF34_37D4_41E0_68829AED5FA6",
 "initialSequence": "this.sequence_F0BCCFAD_FF34_37D4_41E9_D463588507C0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -166.04,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFAEB3F8_FF34_0F3D_41E5_19A310293314",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFA943F8_FF34_0F3D_4170_A394A8FC55BD",
 "initialSequence": "this.sequence_EFAEB3F8_FF34_0F3D_41E5_19A310293314",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 138.86,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 18",
 "id": "panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE",
 "overlays": [
  "this.overlay_CED9E572_C0E8_09D8_41D3_6E3D9A3FB0F3",
  "this.overlay_CE6C8DB7_C0E8_1951_41CA_7370AF8574DF",
  "this.overlay_CEA988E7_C0E8_18E2_41E3_F5012BABA058",
  "this.overlay_CD936216_C0E8_0B27_41A9_5E9C66DBBF9E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EF41E081_FF34_09CC_41E9_5C9D39342D1B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF418081_FF34_09CC_41CA_FF57EB6A8724",
 "initialSequence": "this.sequence_EF41E081_FF34_09CC_41E9_5C9D39342D1B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -60.24,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF4853D2_FF34_0F4C_41CD_5430DC993468",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF4843D2_FF34_0F4C_41EF_C0852A4899A4",
 "initialSequence": "this.sequence_EF4853D2_FF34_0F4C_41CD_5430DC993468",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.43,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC1F82A0_FF34_09CD_41D4_EC6812906A8E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC1FA2A0_FF34_09CD_41EA_22390EE7245E",
 "initialSequence": "this.sequence_EC1F82A0_FF34_09CD_41D4_EC6812906A8E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF4F608B_FF34_09DC_41DD_955526F72FE9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF4F108B_FF34_09DC_41E4_A54F44FFE452",
 "initialSequence": "this.sequence_EF4F608B_FF34_09DC_41DD_955526F72FE9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.78,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_camera"
  },
  {
   "media": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_camera"
  },
  {
   "media": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_camera"
  },
  {
   "media": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_camera"
  },
  {
   "media": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_camera"
  },
  {
   "media": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_camera"
  },
  {
   "media": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426_camera"
  },
  {
   "media": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_camera"
  },
  {
   "media": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_camera"
  },
  {
   "media": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_camera"
  },
  {
   "media": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_camera"
  },
  {
   "media": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587_camera"
  },
  {
   "media": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_camera"
  },
  {
   "media": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8_camera"
  },
  {
   "media": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_camera"
  },
  {
   "media": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_camera"
  },
  {
   "media": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_camera"
  },
  {
   "media": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A856030D_A220_65EA_41E3_78590B588A1B_camera"
  },
  {
   "media": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_camera"
  },
  {
   "media": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_camera"
  },
  {
   "media": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_camera"
  },
  {
   "media": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_camera"
  },
  {
   "media": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_camera"
  },
  {
   "media": "this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_camera"
  },
  {
   "media": "this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_camera"
  },
  {
   "media": "this.panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_camera"
  },
  {
   "media": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_camera"
  },
  {
   "media": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_camera"
  },
  {
   "media": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_camera"
  },
  {
   "media": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_camera"
  },
  {
   "media": "this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_camera"
  },
  {
   "media": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D_camera"
  },
  {
   "media": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377_camera"
  },
  {
   "media": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_camera"
  },
  {
   "media": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_camera"
  },
  {
   "media": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_camera"
  },
  {
   "media": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_camera"
  },
  {
   "media": "this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_camera"
  },
  {
   "media": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_camera"
  },
  {
   "media": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_camera"
  },
  {
   "media": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296_camera"
  },
  {
   "media": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_camera"
  },
  {
   "media": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_camera"
  },
  {
   "media": "this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_camera"
  },
  {
   "media": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_camera"
  },
  {
   "media": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_camera"
  },
  {
   "media": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_camera"
  },
  {
   "media": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_camera"
  },
  {
   "media": "this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_camera"
  },
  {
   "media": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_camera"
  },
  {
   "media": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_camera"
  },
  {
   "media": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "idleSequence": "this.sequence_EED671BA_FF34_0B3D_41DC_372B731A52A8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EED611BA_FF34_0B3D_41ED_5FB07CF22FF9",
 "initialSequence": "this.sequence_EED671BA_FF34_0B3D_41DC_372B731A52A8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.84,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDCF9282_FF34_09CC_41E8_9953F8A4C80A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDCFB282_FF34_09CC_41EA_8D1A7AC6DDBF",
 "initialSequence": "this.sequence_EDCF9282_FF34_09CC_41E8_9953F8A4C80A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF9F60B3_FF34_0933_41D3_E23177B6E3E9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF9F10B3_FF34_0933_41C6_720EA08710EB",
 "initialSequence": "this.sequence_EF9F60B3_FF34_0933_41D3_E23177B6E3E9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.41,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0F002E9_FF34_095F_41B8_D37BA22750C3",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0F032E9_FF34_095F_41E8_A3E845AB9310",
 "initialSequence": "this.sequence_F0F002E9_FF34_095F_41B8_D37BA22750C3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 05",
 "id": "panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD",
 "overlays": [
  "this.overlay_F4DB4FA5_C446_900F_41C6_EABB7B78783D",
  "this.overlay_F4AEB3A0_C446_9005_41E3_35869A653FE2",
  "this.overlay_F43971B1_C44A_B007_41AF_03C0D6508D70"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0D20FFE_FF34_3734_41BF_AE1FE0DA0483",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0D21FFE_FF34_3734_41CA_DEA63C2B77F4",
 "initialSequence": "this.sequence_F0D20FFE_FF34_3734_41BF_AE1FE0DA0483",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.73,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED22B53E_FF34_0B34_41E2_7BF61DA10738",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED22A53E_FF34_0B34_41DA_54F40508B2A7",
 "initialSequence": "this.sequence_ED22B53E_FF34_0B34_41E2_7BF61DA10738",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.29,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0D87008_FF34_08DC_41D0_7D77B7A0D9B8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0D86008_FF34_08DC_41D9_A31161F98AE9",
 "initialSequence": "this.sequence_F0D87008_FF34_08DC_41D0_7D77B7A0D9B8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -166.04,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF8EB0BD_FF34_0937_41EF_C447DDD0F817",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF8EA0BD_FF34_0937_41D6_3504F545A0D7",
 "initialSequence": "this.sequence_EF8EB0BD_FF34_0937_41EF_C447DDD0F817",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 146.2,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 04",
 "id": "panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9",
 "overlays": [
  "this.overlay_AC94A021_A220_6409_41CC_6A982709BFCB",
  "this.overlay_AD722348_A221_E418_41D0_A8B117E10990",
  "this.overlay_CEE1F898_C0E8_781B_41E2_1790A2C30915"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFFBA0C7_FF34_0953_41EB_56599B755231",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFFA50C7_FF34_0953_41E0_19D730AEE7F1",
 "initialSequence": "this.sequence_EFFBA0C7_FF34_0953_41EB_56599B755231",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 38.2,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0EEE326_FF34_08D4_41E3_042C03B06FA8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0EE9326_FF34_08D4_41EA_66FA0A0FDD38",
 "initialSequence": "this.sequence_F0EEE326_FF34_08D4_41E3_042C03B06FA8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 94.78,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE582488_FF34_09DC_41D6_1E4BCE95FC90",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE58C488_FF34_09DC_41EC_C6B8FDEF9FA4",
 "initialSequence": "this.sequence_EE582488_FF34_09DC_41D6_1E4BCE95FC90",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEBAD153_FF34_0B73_417C_0C7808B5F6E8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEBAC153_FF34_0B73_41E2_B7C5D7ECA546",
 "initialSequence": "this.sequence_EEBAD153_FF34_0B73_417C_0C7808B5F6E8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "12. Sundar 360 01 01",
 "id": "panorama_DC99220D_C44B_701F_41C2_E48577CC5377",
 "overlays": [
  "this.overlay_DC99720E_C44B_701D_41D1_6B3382397419",
  "this.overlay_DC98A20E_C44B_701D_41E6_EAF78FC6A8BC",
  "this.overlay_DDBAA4D9_C43F_B007_41CF_881F56CC5F2D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C9AB0616_C44B_700D_41E5_70875426881D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EF6A63B3_FF34_0FCC_41B1_1264967B66A5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF6A03B3_FF34_0FCC_41E3_4B53FB22BACA",
 "initialSequence": "this.sequence_EF6A63B3_FF34_0FCC_41B1_1264967B66A5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.71,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE4B613F_FF34_0B34_41D6_62126995C914",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE4B113F_FF34_0B34_418D_A641600BAAEA",
 "initialSequence": "this.sequence_EE4B613F_FF34_0B34_41D6_62126995C914",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.67,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFB8B095_FF34_09F4_41CF_D819D4C090D0",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFBB5095_FF34_09F4_41D5_53D8CA7310EB",
 "initialSequence": "this.sequence_EFB8B095_FF34_09F4_41CF_D819D4C090D0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.94,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 05",
 "id": "panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73",
 "overlays": [
  "this.overlay_ACA42ABC_A220_247B_41C7_2311F2FD4EB0",
  "this.overlay_CEF34270_C0E8_0823_41E3_2AC3850B0763",
  "this.overlay_CF29F307_C0E8_09E2_41E2_3C45B4D81096"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "13. Panvati 360 01 01",
 "id": "panorama_E3432908_C4C7_7005_41E4_68FAA7254296",
 "overlays": [
  "this.overlay_E8CC43F4_C4CA_B00D_41DC_2FFA880864F4",
  "this.overlay_E2D29C6E_C4CE_F01D_41C7_08810A03E337",
  "this.overlay_EE60D717_C44E_900B_41D3_B8D0C2C58144"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED92F246_FF34_0954_41E6_94D2FAECD463",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED92E246_FF34_0954_41EB_8DCF20E627E9",
 "initialSequence": "this.sequence_ED92F246_FF34_0954_41E6_94D2FAECD463",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 138.86,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Gopal 360 02",
 "id": "panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC",
 "overlays": [
  "this.overlay_D02F2827_C44E_F00B_41C6_1FF0FD06D53C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EF135381_FF34_0FCC_41D3_10FFADD46AAD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF134381_FF34_0FCC_41EC_F0C79429311C",
 "initialSequence": "this.sequence_EF135381_FF34_0FCC_41D3_10FFADD46AAD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 07",
 "id": "panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC",
 "overlays": [
  "this.overlay_ACD7AEA5_A260_1C13_41D1_8E24B0FE9E3A",
  "this.overlay_CD2EA7FD_C0E8_0835_41C1_F9DC60C3007D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE34E449_FF34_095F_41E0_28EA9A173198",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE349449_FF34_095F_41EA_6CBEF6C73C44",
 "initialSequence": "this.sequence_EE34E449_FF34_095F_41E0_28EA9A173198",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": 13.96
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0C54358_FF34_0F7D_41EB_B89F9682DE84",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0C57358_FF34_0F7D_41B7_0F7D3B149E6E",
 "initialSequence": "this.sequence_F0C54358_FF34_0F7D_41EB_B89F9682DE84",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -140.33,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 25",
 "id": "panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C",
 "overlays": [
  "this.overlay_AC99E647_A260_EC3B_41BA_47339CF4726A",
  "this.overlay_AC895057_A260_24DC_41C3_059FAEEA9364",
  "this.overlay_CD0EAFB0_C0F8_3898_41A1_697BCE865217",
  "this.overlay_CD089D3A_C0F8_3995_41DB_CF6D89D6AA3A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0B61F97_FF34_37F4_41EC_7BFC5A4D8279",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0B6EF97_FF34_37F4_41CF_F79B3B21820F",
 "initialSequence": "this.sequence_F0B61F97_FF34_37F4_41EC_7BFC5A4D8279",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -160.16,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 07",
 "id": "panorama_E3562B79_C44D_B007_41E4_DF55153B79CA",
 "overlays": [
  "this.overlay_F537F918_C44A_9005_41B7_6E3F2B921291",
  "this.overlay_F7092B3E_C446_907D_41B9_A459CDCF6DBF",
  "this.overlay_F0B14F38_C45A_F005_41AD_B4A0B6C7C59B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_t.jpg",
 "hfovMax": 138
},
{
 "idleSequence": "this.sequence_EF5D83CA_FF34_0F5C_41A0_FB557455D0BB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF5DA3CA_FF34_0F5C_41E3_E2B4AA763DBB",
 "initialSequence": "this.sequence_EF5D83CA_FF34_0F5C_41A0_FB557455D0BB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.82,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0D5B33A_FF34_0F3C_41E9_D3DBDE9537B2",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0D5A33A_FF34_0F3C_41EC_901C7B47F5C4",
 "initialSequence": "this.sequence_F0D5B33A_FF34_0F3C_41E9_D3DBDE9537B2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 146.2,
  "class": "PanoramaCameraPosition",
  "pitch": 19.84
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8A78F72_A220_1C3E_41CB_69834D123426_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE65AF48_FF34_375D_41EB_979A2119FBDB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE658F48_FF34_375D_41D0_27D9BBD15BEF",
 "initialSequence": "this.sequence_EE65AF48_FF34_375D_41EB_979A2119FBDB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.45,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Sundarache deul new 03 01",
 "id": "panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C",
 "overlays": [
  "this.overlay_E720C80D_C4DD_F01F_41DB_0234663FED69",
  "this.overlay_E090A5BA_C4DB_B005_41E0_D78008468D04"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0D96344_FF34_0F54_41D4_6FCB22CEC2A8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0D91344_FF34_0F54_41CF_CD1FDFF81995",
 "initialSequence": "this.sequence_F0D96344_FF34_0F54_41D4_6FCB22CEC2A8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 65.39,
  "class": "PanoramaCameraPosition",
  "pitch": -5.88
 },
 "class": "PanoramaCamera"
},
{
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_t.jpg",
 "id": "panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227",
 "label": "06. Hatvati 360 26",
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "idleSequence": "this.sequence_ED439227_FF34_08D3_4169_7F8CCD504A34",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED438227_FF34_08D3_41D0_D12614801A34",
 "initialSequence": "this.sequence_ED439227_FF34_08D3_4169_7F8CCD504A34",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "id": "panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0C0E34E_FF34_0F54_41EE_8ECE12B93028",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0C0834E_FF34_0F54_41E1_097A8FD70C46",
 "initialSequence": "this.sequence_F0C0E34E_FF34_0F54_41EE_8ECE12B93028",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.98,
  "class": "PanoramaCameraPosition",
  "pitch": 13.22
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE30C0F0_FF34_094C_41AA_D70991ECE2DF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE30F0F0_FF34_094C_41EA_C3EF63D0D07A",
 "initialSequence": "this.sequence_EE30C0F0_FF34_094C_41AA_D70991ECE2DF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE7FE474_FF34_0934_41E2_83738DBD833F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE7F9474_FF34_0934_41E5_5C3250773A32",
 "initialSequence": "this.sequence_EE7FE474_FF34_0934_41E2_83738DBD833F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 82.29,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0926FC1_FF34_374F_41EC_A68ABCC2F3FA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0927FC1_FF34_374F_41D2_82D06281DD03",
 "initialSequence": "this.sequence_F0926FC1_FF34_374F_41EC_A68ABCC2F3FA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -157.22,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF3E236C_FF34_0F55_41EE_098C56ED7291",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF3ED36C_FF34_0F55_41EA_6F2725F8313C",
 "initialSequence": "this.sequence_EF3E236C_FF34_0F55_41EE_098C56ED7291",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 168.24,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE85F188_FF34_0BDC_41DA_FF41E68BCDF9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE859188_FF34_0BDC_41E0_4D6374C6755B",
 "initialSequence": "this.sequence_EE85F188_FF34_0BDC_41DA_FF41E68BCDF9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.02,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DC99220D_C44B_701F_41C2_E48577CC5377_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 21",
 "id": "panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E",
 "overlays": [
  "this.overlay_CEB1D156_C0E8_093E_41D9_FC21DD3AEC5D",
  "this.overlay_CEAEA79D_C0E8_0937_41DF_46CAC7041674",
  "this.overlay_CF224B4F_C118_7902_41D2_E29C31393AD5",
  "this.overlay_EBEC2670_C118_0D86_41B3_22A5F4A72E5C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE20B0FA_FF34_093C_41B5_40C972954E98",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE20A0FA_FF34_093C_41C0_A56E4BB9B5FC",
 "initialSequence": "this.sequence_EE20B0FA_FF34_093C_41B5_40C972954E98",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -75.67,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED26A1EB_FF34_0B5C_41BB_38761DC94F1C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED2151EB_FF34_0B5C_41E7_25426150DAA5",
 "initialSequence": "this.sequence_ED26A1EB_FF34_0B5C_41BB_38761DC94F1C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 137.39,
  "class": "PanoramaCameraPosition",
  "pitch": 14.69
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Sundarache deul new 01 01",
 "id": "panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92",
 "overlays": [
  "this.overlay_D82D9CCC_C4C5_701D_41E7_D6B9383D2AB9",
  "this.overlay_D9923192_C4C5_B005_41E0_08BFBA488F21",
  "this.overlay_D93819DB_C4CB_F03B_41C2_52B26135733A",
  "this.overlay_E13518BA_C4CA_B005_41E0_7D89AC4CCC69"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 12",
 "id": "panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062",
 "overlays": [
  "this.overlay_ACC7DEED_A260_3DF5_41DD_25D12172FE88",
  "this.overlay_CEE9BA1E_C0F8_7BB3_41C8_BB11368BCBB2",
  "this.overlay_CA516157_C44A_900B_41CB_573EE4859FA1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EFD86435_FF34_0934_4192_408BDC5E82E5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFD81435_FF34_0934_41E7_EA84F3020873",
 "initialSequence": "this.sequence_EFD86435_FF34_0934_4192_408BDC5E82E5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.18,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0F9F307_FF34_08D3_41D5_3A78E1D4034E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0F9E307_FF34_08D3_41D6_183B199BFA03",
 "initialSequence": "this.sequence_F0F9F307_FF34_08D3_41D5_3A78E1D4034E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Gopal 360 05",
 "id": "panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1",
 "overlays": [
  "this.overlay_D0643B88_C44E_B005_41E1_DECE37AA476E",
  "this.overlay_D295312D_C44A_B01F_41E1_4DD83188BFE6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 06",
 "id": "panorama_E357DDAD_C44D_901F_41E3_4F08410EF208",
 "overlays": [
  "this.overlay_F5481C04_C44D_900D_41E0_661E3B547E8A",
  "this.overlay_F52EBD94_C44E_F00D_41A2_6E5E8CD042D8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_C9AB0616_C44B_700D_41E5_70875426881D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 23",
 "id": "panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC",
 "overlays": [
  "this.overlay_CF42A1F7_C118_091D_41DC_2AFD6DED4C0C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED9D7250_FF34_094C_41E2_6E86EAC52781",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED9D6250_FF34_094C_41E8_95906EB333E8",
 "initialSequence": "this.sequence_ED9D7250_FF34_094C_41E2_6E86EAC52781",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11. Sundar 360 06",
 "id": "panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D",
 "overlays": [
  "this.overlay_E55E26BC_C4DA_907C_41D2_90D8F317F5A5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (3)",
 "id": "panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C",
 "overlays": [
  "this.overlay_AC4384C3_A220_6C00_41DB_3E09A6E23585",
  "this.overlay_B3A39E42_A220_3C06_41CF_4190B761A4B2",
  "this.overlay_CD144CAC_C0E8_3800_41E0_DF3B677736D2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0C44012_FF34_08CC_41E7_87BB5E2BB5F7",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0C47012_FF34_08CC_41A3_ADEEA775425A",
 "initialSequence": "this.sequence_F0C44012_FF34_08CC_41E7_87BB5E2BB5F7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF33A01C_FF34_08F4_41B9_5E5CC239364A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF32401C_FF34_08F4_41D2_AC4B47E5F720",
 "initialSequence": "this.sequence_EF33A01C_FF34_08F4_41B9_5E5CC239364A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 135.92,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11. Sundar360 05",
 "id": "panorama_DCACD847_C447_F00C_41E0_44022FB89EEB",
 "overlays": [
  "this.overlay_E6B339EF_C4DA_901B_41BD_6783A0A4813F",
  "this.overlay_E183755A_C4DE_9005_41E1_5A2752FEF640"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_t.jpg",
 "hfovMax": 141
},
{
 "idleSequence": "this.sequence_EF19538B_FF34_0FDC_41EA_12DD9E7A04AC",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF19438B_FF34_0FDC_41D0_3186E7B04AED",
 "initialSequence": "this.sequence_EF19538B_FF34_0FDC_41EA_12DD9E7A04AC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.57,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFD790DC_FF34_0974_41ED_10CD18A718F6",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFD7B0DC_FF34_0974_41B9_69A84E62025C",
 "initialSequence": "this.sequence_EFD790DC_FF34_0974_41ED_10CD18A718F6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.2,
  "class": "PanoramaCameraPosition",
  "pitch": 8.08
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED8D125A_FF34_097C_41E2_E250B40D6321",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED8D025A_FF34_097C_41E5_C9CE557FC826",
 "initialSequence": "this.sequence_ED8D125A_FF34_097C_41E2_E250B40D6321",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": 13.96
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF629063_FF34_094C_419F_85BC9817E95E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF628063_FF34_094C_41E4_9A68919A86FC",
 "initialSequence": "this.sequence_EF629063_FF34_094C_419F_85BC9817E95E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0996FCB_FF34_3753_41D9_57B5A1466FC6",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0997FCB_FF34_3753_41D2_039DCDA9EAEA",
 "initialSequence": "this.sequence_F0996FCB_FF34_3753_41D9_57B5A1466FC6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.2,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED3111E1_FF34_0B4C_41EF_C3807AFB6E79",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED3101E1_FF34_0B4C_41C2_1E098CEC9A8B",
 "initialSequence": "this.sequence_ED3111E1_FF34_0B4C_41EF_C3807AFB6E79",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 29.39,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEAA3168_FF34_0B5C_41E1_9F44820739A8",
 "timeToIdle": 5000,
 "id": "camera_EEAAC168_FF34_0B5C_41E6_7205FE320C27",
 "initialSequence": "this.sequence_EEAA3168_FF34_0B5C_41E1_9F44820739A8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -107.27,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/0/{row}_{column}.jpg",
      "colCount": 10,
      "rowCount": 10,
      "width": 5120,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Gopal 360 01",
 "id": "panorama_C9AB0616_C44B_700D_41E5_70875426881D",
 "overlays": [
  "this.overlay_D21156D6_C447_900D_41E1_62F9BC7E3F63",
  "this.overlay_D34A20AF_C47D_901B_41C6_7C047E2AC6CF",
  "this.overlay_D35B0D9C_F9B1_98F9_41E0_7E9B449FFEF1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8510386_A220_24E7_41C5_C72999B28587"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0A5CFB7_FF34_3734_41ED_8FE6D4B47393",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0A5DFB7_FF34_3734_41ED_CC19B7F283B0",
 "initialSequence": "this.sequence_F0A5CFB7_FF34_3734_41ED_8FE6D4B47393",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 44.08,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDB32231_FF34_08CF_41C9_354690B9F41D",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDB3D231_FF34_08CF_41D0_9F32DFF72748",
 "initialSequence": "this.sequence_EDB32231_FF34_08CF_41C9_354690B9F41D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 16.16,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "06. Hatvati 360 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "06. Hatvati 360 03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Outter part (3)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "06. Hatvati 360 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "06. Hatvati 360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "06. Hatvati 360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "06. Hatvati 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "06. Hatvati 360 07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "06. Hatvati 360 08",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "06. Hatvati 360 09",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "06. Hatvati 360 10",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "06. Hatvati 360 11",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "06. Hatvati 360 12",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "06. Hatvati 360 24",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "06. Hatvati 360 25",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "06. Hatvati 360 14",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "06. Hatvati 360 16",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "06. Hatvati 360 15",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "06. Hatvati 360 17",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "06. Hatvati 360 18",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "06. Hatvati 360 19",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "06. Hatvati 360 20",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "06. Hatvati 360 21",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "06. Hatvati 360 22",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "06. Hatvati 360 23",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "06. Hatvati 360 26",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "10. Gopal 360 03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "10. Gopal 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "10. Gopal 360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "label": "10. Gopal 360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "label": "10. Gopal 360 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "label": "10. Gopal 360 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "label": "12. Sundar 360 01 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "label": "11. Sundar 360 07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "label": "Sundarache deul new 01 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "label": "11. Sundar360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "label": "11. Sundar02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "label": "11. Sundar 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "label": "11. Sundar360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "label": "Sundarache deul new 03 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "label": "13. Panvati 360 01 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "label": "13. Panvati 360 02 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  },
  {
   "label": "09. Kapaleshwar 360 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  },
  {
   "label": "09. Kapaleshwar 360 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 43)"
  },
  {
   "label": "09. Kapaleshwar 360 09",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  },
  {
   "label": "09. Kapaleshwar 360 03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  },
  {
   "label": "09. Kapaleshwar 360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  },
  {
   "label": "09. Kapaleshwar 360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 47)"
  },
  {
   "label": "09. Kapaleshwar 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 48)"
  },
  {
   "label": "09. Kapaleshwar 360 07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 49)"
  },
  {
   "label": "09. Kapaleshwar 360 08",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  },
  {
   "label": "09. Kapaleshwar 360 10",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 51)"
  }
 ],
 "label": "Media",
 "id": "Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11. Sundar360 04",
 "id": "panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF",
 "overlays": [
  "this.overlay_DAFCAE2D_C4CE_901F_41E7_39E9FC44B010",
  "this.overlay_DBD08301_C4CA_9007_41A0_8F9A23FFC319",
  "this.overlay_E6F4FEA9_C4CA_9007_41D4_6FF4EEB047BC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EEE164F7_FF34_0934_41D5_65FAA83D9FAD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEE114F7_FF34_0934_41EF_448718303142",
 "initialSequence": "this.sequence_EEE164F7_FF34_0934_41D5_65FAA83D9FAD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.71,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFF0B417_FF34_08F4_41E7_3452D7961BE7",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFF0A417_FF34_08F4_41DB_E36C317C720E",
 "initialSequence": "this.sequence_EFF0B417_FF34_08F4_41E7_3452D7961BE7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0F9CFEA_FF34_375C_41E9_B12361EC227E",
 "timeToIdle": 5000,
 "id": "camera_F0F9DFEA_FF34_375C_41EC_DED79E953732",
 "initialSequence": "this.sequence_F0F9CFEA_FF34_375C_41E9_B12361EC227E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 69.06,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE2D6104_FF34_08D4_41E8_671C3CE3B00C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE2D1104_FF34_08D4_41D5_EE44314332E3",
 "initialSequence": "this.sequence_EE2D6104_FF34_08D4_41E8_671C3CE3B00C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 04",
 "id": "panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD",
 "overlays": [
  "this.overlay_EAF1FB57_C47F_B00B_41C9_5945DE7E5B83",
  "this.overlay_EA312B26_C445_700C_41E3_F970C768AFA5",
  "this.overlay_F1B3B2B2_C446_9005_41E6_A0D8A4B9E455"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "09. Kapaleshwar 360 10",
 "id": "panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871",
 "overlays": [
  "this.overlay_F062D0F7_C45A_900C_41DC_4B9F1CF9317C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_F0F6C2F3_FF34_0933_41EB_AFA33AE7E22C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0F6F2F3_FF34_0933_41DC_9CC836C113A8",
 "initialSequence": "this.sequence_F0F6C2F3_FF34_0933_41EB_AFA33AE7E22C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 02",
 "id": "panorama_A8795465_A220_6C25_41D5_DBAD541AD55C",
 "overlays": [
  "this.overlay_AC90E7D2_A220_2C04_41E4_04BEE931BA6D",
  "this.overlay_B30ADB6F_A220_641B_41C5_E89BB69E8254",
  "this.overlay_CEB5EF44_C0E8_1872_41DF_0B844A722642"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE0D8118_FF34_08FC_41D1_39B723A6DDDA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE0DB116_FF34_08F4_41D5_0CCC7D5324A3",
 "initialSequence": "this.sequence_EE0D8118_FF34_08FC_41D1_39B723A6DDDA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0E4831C_FF34_08F4_41DE_F1313C589F22",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0E4B31C_FF34_08F4_41D0_5538A54C2BCA",
 "initialSequence": "this.sequence_F0E4831C_FF34_08F4_41DE_F1313C589F22",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.04,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 24",
 "id": "panorama_A84C7191_A220_24FA_41E2_8125807332B8",
 "overlays": [
  "this.overlay_ACE08B53_A260_24D0_41C1_4E3538E014CB",
  "this.overlay_B2437FE6_A26F_FBF0_41D8_1F20F2DC819B",
  "this.overlay_ACFF7F24_A260_1C7C_41DF_316905D445A9",
  "this.overlay_CEB73011_C0F8_0789_41DB_466C3D60AA8D",
  "this.overlay_CB5F2398_C445_B004_41AF_23E76E12DE9A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84C7191_A220_24FA_41E2_8125807332B8_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 15",
 "id": "panorama_A856030D_A220_65EA_41E3_78590B588A1B",
 "overlays": [
  "this.overlay_AC85CE97_A260_3C59_41E1_FC3DB9C8D8C0",
  "this.overlay_CE8E36F1_C0E8_08B3_41B6_2563AEDCA45C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EDFCD264_FF34_0954_41A3_4C84CDAD9D1B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDFCC264_FF34_0954_41E8_33FFA27EAA66",
 "initialSequence": "this.sequence_EDFCD264_FF34_0954_41A3_4C84CDAD9D1B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "06. Hatvati 360 01",
 "id": "panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848",
 "overlays": [
  "this.overlay_E9D74FA1_C168_3A3A_41B2_ED6DF21B2A60"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE0D6469_FF34_095F_41E1_FD6B047FC844",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE0D3469_FF34_095F_41E0_3D3020DC100A",
 "initialSequence": "this.sequence_EE0D6469_FF34_095F_41E1_FD6B047FC844",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 138.12,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0844FD5_FF34_3777_41EE_D04067CB3011",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0845FD5_FF34_3777_41E3_2BFA10D2805E",
 "initialSequence": "this.sequence_F0844FD5_FF34_3777_41EE_D04067CB3011",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -138.86,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE6E347E_FF34_0934_41CC_BDF18DD0EE89",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE6ED47E_FF34_0934_41E7_A05AD2FCF0B3",
 "initialSequence": "this.sequence_EE6E347E_FF34_0934_41CC_BDF18DD0EE89",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFE590D2_FF34_094C_41E4_DE3D94816F93",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFE580D2_FF34_094C_41CC_43E33845CD8B",
 "initialSequence": "this.sequence_EFE590D2_FF34_094C_41E4_DE3D94816F93",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.78,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDDFE278_FF34_093C_41EC_972C19DA85BE",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDDF8278_FF34_093C_41E6_DAA3EC37B585",
 "initialSequence": "this.sequence_EDDFE278_FF34_093C_41EC_972C19DA85BE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE421F5C_FF34_3775_41CC_C4DCAEFE7D77",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE42FF5C_FF34_3775_41D8_E4335EB58506",
 "initialSequence": "this.sequence_EE421F5C_FF34_3775_41CC_C4DCAEFE7D77",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 144,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF3E5026_FF34_08D4_41EE_A4FD00B5AEA2",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF3E4026_FF34_08D4_41E0_0638F3F7D37F",
 "initialSequence": "this.sequence_EF3E5026_FF34_08D4_41EE_A4FD00B5AEA2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 133.71,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10. Gopal 360 03",
 "id": "panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E",
 "overlays": [
  "this.overlay_CBDEB306_C446_900D_41C4_D3D4FDF26E9E",
  "this.overlay_D4695117_C446_900B_41D6_F2A535964DB1",
  "this.overlay_CAA32943_C445_700B_41D7_E671B2ED72FF",
  "this.overlay_D51D41D9_C45E_9007_41E3_0C93D829869F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A84C7191_A220_24FA_41E2_8125807332B8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EE3F5F11_FF34_38CC_41E7_ACA48F9B0CCC",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EED1150B_FF34_08DC_41D3_37D142AE29AF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EED1050B_FF34_08DC_41E1_8ECEEDE54F1A",
 "initialSequence": "this.sequence_EED1150B_FF34_08DC_41D3_37D142AE29AF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -170.45,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF0AA395_FF34_0FF4_41E7_827C41648262",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF055395_FF34_0FF4_41D3_2A8B889F4E17",
 "initialSequence": "this.sequence_EF0AA395_FF34_0FF4_41E7_827C41648262",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 35.27,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF1F4044_FF34_0955_41EF_A6A75577333C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF1F7044_FF34_0955_41E2_22830CA7D158",
 "initialSequence": "this.sequence_EF1F4044_FF34_0955_41EF_A6A75577333C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 168.24,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE214453_FF34_0973_41E0_9A25945B5E83",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE217453_FF34_0973_41E5_93B582EBCCA7",
 "initialSequence": "this.sequence_EE214453_FF34_0973_41E0_9A25945B5E83",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -71.27,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEC7B1CF_FF34_0B54_41E4_336A9C54F1CB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEC7A1CF_FF34_0B54_41B4_8E753E8B7A48",
 "initialSequence": "this.sequence_EEC7B1CF_FF34_0B54_41E4_336A9C54F1CB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.43,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF87040D_FF34_08D4_41B6_0B5729581219",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF87340D_FF34_08D4_41EA_7719F645B701",
 "initialSequence": "this.sequence_EF87040D_FF34_08D4_41B6_0B5729581219",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -42.61,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF558077_FF34_0934_41EA_166E77D68194",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF55B077_FF34_0934_4197_8FDD42964B4D",
 "initialSequence": "this.sequence_EF558077_FF34_0934_41EA_166E77D68194",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF5663C5_FF34_0F54_41E6_CF0A421A291A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF5603C5_FF34_0F54_41E2_BAC7BFAED902",
 "initialSequence": "this.sequence_EF5663C5_FF34_0F54_41E6_CF0A421A291A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED710209_FF34_08DC_41E5_76B1A0F5A6CD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED71D209_FF34_08DC_41ED_917EEBD32B0C",
 "initialSequence": "this.sequence_ED710209_FF34_08DC_41E5_76B1A0F5A6CD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.2,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_F0F552FD_FF34_0937_41D3_B7A3504873D4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_F0F542FD_FF34_0937_41E2_BBFCD2FD0F78",
 "initialSequence": "this.sequence_F0F552FD_FF34_0937_41D3_B7A3504873D4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED01D1FF_FF34_0B34_41EE_E6740C8E2854",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED01C1FF_FF34_0B34_41E6_EE9FD81FC393",
 "initialSequence": "this.sequence_ED01D1FF_FF34_0B34_41EE_E6740C8E2854",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.9,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC2E1296_FF34_09F5_41CF_DCCE1FD67707",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC2E3296_FF34_09F5_41EB_25F38A995341",
 "initialSequence": "this.sequence_EC2E1296_FF34_09F5_41CF_DCCE1FD67707",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED60E213_FF34_08F3_41D4_765C8D35BBF7",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED609213_FF34_08F3_41EB_5A06D5F1A8AC",
 "initialSequence": "this.sequence_ED60E213_FF34_08F3_41D4_765C8D35BBF7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEF7C4E3_FF34_094C_41E7_8DF8C38D4D41",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEF7E4E3_FF34_094C_41E7_27E580326D5B",
 "initialSequence": "this.sequence_EEF7C4E3_FF34_094C_41E7_8DF8C38D4D41",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -127.84,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8527764_A220_6C5A_41DF_BD2A1AE8A227_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A8510386_A220_24E7_41C5_C72999B28587_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE104455_FF34_0977_41C8_9394C0B1216E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE106455_FF34_0977_41E8_6AEC7B7E3747",
 "initialSequence": "this.sequence_EE104455_FF34_0977_41C8_9394C0B1216E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.04,
  "class": "PanoramaCameraPosition",
  "pitch": -18.37
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF11B03A_FF34_093D_4185_B7FBC5B20CCA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF11A03A_FF34_093D_41DD_6A47B2B8DB5C",
 "initialSequence": "this.sequence_EF11B03A_FF34_093D_4185_B7FBC5B20CCA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 139.59,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76",
 "width": 49.2,
 "right": "1.42%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "1.97%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 49.2,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_C523D811_C8D2_B747_41E7_3DC61B534B76.png",
 "data": {
  "name": "IconButton12329"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 512,
 "maxWidth": 768,
 "id": "Image_E0DACE35_F912_E7E9_41E0_6098AFEA2915",
 "left": "1.81%",
 "width": "8.728%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_E0DACE35_F912_E7E9_41E0_6098AFEA2915.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "2.78%",
 "propagateClick": true,
 "minWidth": 1,
 "height": "11.445%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5487"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 947,
 "maxWidth": 947,
 "id": "Image_E3D12828_F931_EBE6_41E1_D9327D139610",
 "width": "6.75%",
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_E3D12828_F931_EBE6_41E1_D9327D139610.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0.69%",
 "propagateClick": true,
 "minWidth": 1,
 "height": "10.043%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image7903"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE02E45F_FF34_0973_41DE_ADF19B10DECA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF0B704E_FF34_0955_41ED_385E95967EE4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF25F030_FF34_08CC_41EE_7D9FA6116218",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.07,
   "yaw": 158.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.19
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_EF055395_FF34_0FF4_41D3_2A8B889F4E17); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F170FBC5_C118_1A13_41B4_C1421425162C",
   "pitch": -0.19,
   "hfov": 4.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.58
  }
 ],
 "id": "overlay_CF64482F_C118_0723_41D9_E0FCB49B98EC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.55,
   "yaw": 44.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.21
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_EF70D39F_FF34_0FF4_41BC_30209DA84936); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C791D2BE_C8D5_D8BC_41E0_C93F93EA102E",
   "pitch": -1.21,
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.09
  }
 ],
 "id": "overlay_E89713D8_C45D_7005_41E3_D574EB6F615D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.46,
   "yaw": 80.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.06
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296, this.camera_EF19438B_FF34_0FDC_41D0_3186E7B04AED); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79152BE_C8D5_D8BC_41D5_0D9AB2DEEE32",
   "pitch": 0.06,
   "hfov": 4.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.59
  }
 ],
 "id": "overlay_ED194C6F_C45B_901B_41D6_5234AD54984E",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE4BC492_FF34_09CC_41E2_2D8708F9B087",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEBAD49C_FF34_09F4_41E1_12DF6AC70C7B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED1621F5_FF34_0B34_41E6_15DA3CC97C86",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE58C135_FF34_0B34_41CB_065CC2830D8B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE7E5122_FF34_08CD_41D5_3DE6A27C2EE1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF70239F_FF34_0FF4_41CE_F30623729B90",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFC5243F_FF34_0934_41EA_DB07F293B667",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF68506D_FF34_0954_41D8_0F42F767B680",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFEE642B_FF34_08DC_41D7_59EEFE591EBF",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -32.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.25
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF, this.camera_EF24B376_FF34_0F35_41CF_05418B873089); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C785F2CD_C8D5_D8DF_41D3_5A05F18F7209",
   "pitch": -3.25,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.01
  }
 ],
 "id": "overlay_EE372F91_C44A_9007_41E3_36C73A3DDB61",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -50.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.93
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_EF134381_FF34_0FCC_41EC_F0C79429311C); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78562CD_C8D5_D8DF_41A8_7514C0240782",
   "pitch": -19.93,
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.6
  }
 ],
 "id": "overlay_EF956B1D_C44B_F03F_41DE_B06B8433867E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.55,
   "yaw": 24.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.17
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_EF3ED36C_FF34_0F55_41EA_6F2725F8313C); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C784F2CD_C8D5_D8DF_41C3_0B1DC6F62EBE",
   "pitch": -2.17,
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.73
  }
 ],
 "id": "overlay_EFB10C20_C44A_B005_41DB_FBD73F9E117F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.54,
   "yaw": 49.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.69
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA, this.camera_EF327362_FF34_0F4D_41DC_C99EAC565C5E); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78462CD_C8D5_D8DF_41E2_783930EEE0F4",
   "pitch": -6.69,
   "hfov": 14.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.63
  }
 ],
 "id": "overlay_E86064AE_C44A_901D_41E6_DFD3F50D4F66",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE1DE10E_FF34_08D4_41D5_7AF155B2FDE3",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEA414A6_FF34_09D4_41AC_F3D78329FFE6",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE95E174_FF34_0B34_41EC_3B3AF50CBC13",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDEC726E_FF34_0954_41A9_063A760827C8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEE491B0_FF34_0BCD_41B5_52123EF75C9D",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDA2D23C_FF34_0934_41D1_C0D367149EAD",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0BBDFA3_FF34_37CC_41E5_EE3723D5FE9A",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.28,
   "yaw": -5.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_EFE580D2_FF34_094C_41CC_43E33845CD8B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1712BC5_C118_1A13_41D4_2641AD5A9841",
   "pitch": -2.7,
   "hfov": 9.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.49
  }
 ],
 "id": "overlay_CF49F93E_C118_7909_41E7_A4D9DD104DF6",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF324362_FF34_0F4D_41E3_C37A490A1229",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE9464C4_FF34_0955_41D5_919BC935CE77",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.03,
   "yaw": -20.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.01
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C, this.camera_F0F9DFEA_FF34_375C_41EC_DED79E953732); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1637BB6_C118_1A71_41D0_5B5C414B2B35",
   "pitch": -11.01,
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.3
  }
 ],
 "id": "overlay_AFC8AC42_A220_1C7B_41B4_E0990CC150ED",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.56,
   "yaw": -4.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C, this.camera_F0F2DFDF_FF34_3773_41C6_8F60F7F1B49D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F161EBB6_C118_1A71_41E1_BCE18021F306",
   "pitch": -5.72,
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.37
  }
 ],
 "id": "overlay_ACA4C9B1_A220_241F_41C7_FE1E46C2DC48",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED1C2552_FF34_0B4C_419A_E94504782A6B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0D3A330_FF34_08CC_41E1_F45D8AC82E91",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.55,
   "yaw": -75.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.47
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_EE7E7122_FF34_08CD_41C1_6B21A6D21BB5); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78742CD_C8D5_D8DF_41D9_07D9286737D6",
   "pitch": -1.47,
   "hfov": 5.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.84
  }
 ],
 "id": "overlay_EEB0A569_C445_F007_41D4_E8E21378AF93",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.94,
   "yaw": -126.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.61
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF, this.camera_EE6E912A_FF34_08DD_41E1_C54A3E421DBB); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C786E2CD_C8D5_D8DF_41D3_49D54894B048",
   "pitch": -1.61,
   "hfov": 7.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -126.82
  }
 ],
 "id": "overlay_EE2FC00E_C446_F01D_41B5_7CB79979C8D2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.31,
   "yaw": -9.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.12
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8, this.camera_EE58F135_FF34_0B34_41D6_3187F265C0E4); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78642CD_C8D5_D8DF_41DA_1254C17AAFA1",
   "pitch": 3.12,
   "hfov": 4.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.01
  }
 ],
 "id": "overlay_EF87B5DC_C44F_903D_41B6_14829B45EBEC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": -164.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.9
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE, this.camera_F0D86008_FF34_08DC_41D9_A31161F98AE9); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1744BC5_C118_1A13_41C2_C6D07590D524",
   "pitch": -3.9,
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.06
  }
 ],
 "id": "overlay_CEE12568_C0E8_09C2_41DC_B742C4CC1086",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.45,
   "yaw": 23.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.21
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A856030D_A220_65EA_41E3_78590B588A1B, this.camera_F0C47012_FF34_08CC_41A3_ADEEA775425A); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F175FBC5_C118_1A13_41CF_7FCBE437A432",
   "pitch": -4.21,
   "hfov": 8.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 23.9
  }
 ],
 "id": "overlay_CE30A5C9_C0E8_08C0_41D7_AFC0E4651042",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED335529_FF34_08DF_41E5_E6A999214B7F",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.71,
   "yaw": 162.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.47
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871, this.camera_EF9250A9_FF34_09DF_41D4_73C863DCE452); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BCF2DD_C8D5_D8FC_41E2_5F7A30EB7996",
   "pitch": -13.47,
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 162.65
  }
 ],
 "id": "overlay_F65C659A_C45B_B005_41E2_8E198722F233",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.62,
   "yaw": 88.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.01
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA, this.camera_EFA6609F_FF34_09F4_41E5_DD0F3640516F); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BC42DD_C8D5_D8FC_41CA_5C0F975A9EF4",
   "pitch": -20.01,
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.57
  }
 ],
 "id": "overlay_F7797B97_C45A_F00C_41B3_910A17D5515B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.76,
   "yaw": -41.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.04
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD, this.camera_EF9F10B3_FF34_0933_41C6_720EA08710EB); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7B3A2DD_C8D5_D8FC_41DE_ABCAC90C040E",
   "pitch": -26.04,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.78
  }
 ],
 "id": "overlay_F07E879D_C45F_903F_41C1_1324BC37B740",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE539F52_FF34_374D_41D3_B0C927B6CB5A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEF4B19C_FF34_0BF4_41CF_43297A363EEB",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.89,
   "yaw": -1.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.99
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC, this.camera_EE58C488_FF34_09DC_41EC_C6B8FDEF9FA4); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16DDBB6_C118_1A71_41C9_25C79394BF63",
   "pitch": -8.99,
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.28
  }
 ],
 "id": "overlay_ACF8568F_A260_2C11_41CB_4D34BBB34A78",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.68,
   "yaw": -2.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.27
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4, this.camera_EE6ED47E_FF34_0934_41E7_A05AD2FCF0B3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16F1BB6_C118_1A71_41E7_1733A198E071",
   "pitch": -6.27,
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.97
  }
 ],
 "id": "overlay_AD729937_A260_6470_41DB_09096429053B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.92,
   "yaw": 173.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.27
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73, this.camera_EE7F9474_FF34_0934_41E5_5C3250773A32); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16CDBB6_C118_1A71_41E2_5C1006B51079",
   "pitch": -5.27,
   "hfov": 6.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.45
  }
 ],
 "id": "overlay_CD345AFF_C0E8_3829_41A8_9330863D0B86",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.49,
   "yaw": -166.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.86
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3, this.camera_F0927FC1_FF34_374F_41D2_82D06281DD03); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16AEBB6_C118_1A71_41E4_571F4D6B76C4",
   "pitch": -12.86,
   "hfov": 10.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -166.51
  }
 ],
 "id": "overlay_ACC7D2A7_A260_2462_41A5_3BDF85B9A889",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -33.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.01
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4, this.camera_F0A5DFB7_FF34_3734_41ED_CC19B7F283B0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16ABBB6_C118_1A71_41E2_D9D83B0EFCD5",
   "pitch": -4.01,
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.28
  }
 ],
 "id": "overlay_CD379DAE_C0F8_18F4_41D2_E722A9EEFD2B",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF24E376_FF34_0F35_4177_259A94077C32",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.44,
   "yaw": -76.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.45
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_ED438227_FF34_08D3_41D0_D12614801A34); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1776BB6_C118_1A71_41CA_014FFED9ABDC",
   "pitch": 1.45,
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -76.6
  }
 ],
 "id": "overlay_CEB1158E_C0F8_0978_41E2_11FC0C90BBE4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.27,
   "yaw": -119.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.57
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_ED50D21D_FF34_08F7_41EE_93EE429FA86A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F174FBB6_C118_1A71_41D9_381037803008",
   "pitch": -4.57,
   "hfov": 7.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -119.59
  }
 ],
 "id": "overlay_CE409298_C0F8_0B67_41E4_3B736B748EE8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.67,
   "yaw": 58.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.34
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D, this.camera_EC3F128C_FF34_09D5_41E4_EBF59B08B5FD); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78C42CD_C8D5_D8DF_41D1_259A7B85C0E5",
   "pitch": -26.34,
   "hfov": 19.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.3
  }
 ],
 "id": "overlay_E43E80AC_C4C6_901D_41A3_9F40C695477B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -117.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.73
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF, this.camera_EC2E3296_FF34_09F5_41EB_25F38A995341); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C783A2CD_C8D5_D8DF_41D9_8C87A1458BAA",
   "pitch": -44.73,
   "hfov": 24.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -117.93
  }
 ],
 "id": "overlay_E72FEA1B_C4C6_903B_41C1_53A334B2FAC6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.51,
   "yaw": -137.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.71
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA, this.camera_F0D91344_FF34_0F54_41CF_CD1FDFF81995); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BA62CD_C8D5_D8DF_41E1_E838C6A0C194",
   "pitch": -7.71,
   "hfov": 14.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -137.76
  }
 ],
 "id": "overlay_E9F11374_C445_900D_41DA_3F9F013307A6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.18,
   "yaw": 137.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.1
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_F0C0834E_FF34_0F54_41E1_097A8FD70C46); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7B9E2CD_C8D5_D8DF_41E5_44DE9514215E",
   "pitch": -25.1,
   "hfov": 14.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 137.47
  }
 ],
 "id": "overlay_E991177E_C47A_B0FD_41DF_9BB2C8998A95",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0E62FF4_FF34_3734_41E0_75937F6441FB",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED12E548_FF34_0B5C_41E5_5071283214B4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE8654CE_FF34_0955_41DF_42181AB73159",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.63,
   "yaw": -171.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.83
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0, this.camera_EF7CE3A9_FF34_0FDC_41E5_8D556CDC8A84); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79522BE_C8D5_D8BC_41DC_2180002C36E3",
   "pitch": -12.83,
   "hfov": 8.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.15
  }
 ],
 "id": "overlay_D5805745_C45B_900F_41E4_7BE837AA9BFC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.09,
   "yaw": -42.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.6
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E, this.camera_EF6A03B3_FF34_0FCC_41E3_4B53FB22BACA); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C794D2BE_C8D5_D8BC_4199_61C96BA37B9C",
   "pitch": -36.6,
   "hfov": 13.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -42.67
  }
 ],
 "id": "overlay_D66C2E25_C445_900F_41C4_7656A17C1DA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED50021D_FF34_08F7_41E5_B056280B3327",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": 37.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.55
  }
 ],
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92, this.camera_EF628063_FF34_094C_41E4_9A68919A86FC); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C780F2CD_C8D5_D8DF_41DC_7F63A6E13BC6",
   "pitch": -0.55,
   "hfov": 6.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.64
  }
 ],
 "id": "overlay_E3C1AF43_C4CE_B00B_41E7_78820B061852",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.08,
   "yaw": 80.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.66
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296, this.camera_EF76A058_FF34_097D_41B5_FA1399CEF85F); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C78062CD_C8D5_D8DF_41E5_296D7F77381B",
   "pitch": -10.66,
   "hfov": 7.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.31
  }
 ],
 "id": "overlay_E3FA8065_C4CA_B00F_41E4_081BC0C01BAF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.61,
   "yaw": -142.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.76
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_EF68706D_FF34_0954_41C0_7C8932A06238); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C787F2CD_C8D5_D8DF_41D1_EA45C9E3CD23",
   "pitch": -3.76,
   "hfov": 7.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.96
  }
 ],
 "id": "overlay_EC2852AA_C44B_7005_41CB_DF1A06917FD8",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF9A9402_FF34_08CD_41EC_0E8FD10EEFCE",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE6EE12A_FF34_08DD_41EA_20C01D93D6B5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF93A0A9_FF34_09DF_41B6_369B3E906356",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE7F1F40_FF34_374C_41E3_37DD8BC340C9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFE29421_FF34_08CC_41EC_9847E5BEB034",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEC09515_FF34_08F7_41E7_CB2140102661",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.98,
   "yaw": 147.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.5
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC, this.camera_EF8EA0BD_FF34_0937_41D6_3504F545A0D7); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F173ABC5_C118_1A13_41A8_8B9CD4D5CE08",
   "pitch": -4.5,
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.87
  }
 ],
 "id": "overlay_CF3006F2_C118_0B2B_41B3_28CAEF129723",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.78,
   "yaw": -137.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.52
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_EFFA50C7_FF34_0953_41E0_19D730AEE7F1); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1734BC5_C118_1A13_41D3_65D329E746B8",
   "pitch": -2.52,
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -137.15
  }
 ],
 "id": "overlay_CE0A2007_C118_06EA_41D0_3C618EF0653A",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFA6709F_FF34_09F4_41DA_F661820C0DD5",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.03,
   "yaw": -173.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_ED01C1FF_FF34_0B34_41E6_EE9FD81FC393); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16A4BB6_C118_1A71_41E0_1042A5A5566B",
   "pitch": -8.18,
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.41
  }
 ],
 "id": "overlay_ACD55C68_A260_1CE3_41E3_3B7F841291A1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.72,
   "yaw": 46.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.15
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67, this.camera_ED71D209_FF34_08DC_41ED_917EEBD32B0C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16A1BB6_C118_1A71_41D5_89B73E25EF6E",
   "pitch": -2.15,
   "hfov": 7.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 46.52
  }
 ],
 "id": "overlay_CED76F52_C0F9_F9A6_41DF_E69A80D5C7D5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.36,
   "yaw": -128.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.25
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377, this.camera_ED609213_FF34_08F3_41EB_5A06D5F1A8AC); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79BA2BE_C8D5_D8BC_41DD_06C1116B5E2B",
   "pitch": -8.25,
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.01
  }
 ],
 "id": "overlay_DC0F7AF0_C446_9005_4170_8DB253EB5092",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.19,
   "yaw": -77.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.19
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92, this.camera_F0F9E307_FF34_08D3_41D6_183B199BFA03); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78932BE_C8D5_D8BC_41E5_2CC968B89919",
   "pitch": -12.19,
   "hfov": 16.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.93
  }
 ],
 "id": "overlay_DEA1EF99_C43B_B007_41C8_58FA667B76BA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.05,
   "yaw": 9.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.65
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C, this.camera_F0F6F2F3_FF34_0933_41DC_9CC836C113A8); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78882BE_C8D5_D8BC_41E7_5D172863477A",
   "pitch": -5.65,
   "hfov": 13.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 9.33
  }
 ],
 "id": "overlay_DF0052F0_C43A_B005_41E6_A58F6EDA6E13",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.88,
   "yaw": 99.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.18
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377, this.camera_F0F542FD_FF34_0937_41E2_BBFCD2FD0F78); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78832CD_C8D5_D8DF_41D5_003D0BD41FB5",
   "pitch": -2.18,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.64
  }
 ],
 "id": "overlay_DEB6EC44_C43A_B00D_41D7_03B49498B8D4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.97,
   "yaw": 97.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.44
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D, this.camera_EF5603C5_FF34_0F54_41E2_BAC7BFAED902); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79442BE_C8D5_D8BC_418C_6C3A4346CA37",
   "pitch": -12.44,
   "hfov": 8.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.5
  }
 ],
 "id": "overlay_D6BDEED3_C447_700B_41A9_BFECE2403D7F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 139.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.63
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1, this.camera_EF5DA3CA_FF34_0F5C_41E3_E2B4AA763DBB); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78BC2BE_C8D5_D8BC_41D0_CCC207FBBFFC",
   "pitch": -18.63,
   "hfov": 16.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 139.7
  }
 ],
 "id": "overlay_D7C33690_C44A_B005_418A_797462D41155",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.04,
   "yaw": -31.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.82
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C9AB0616_C44B_700D_41E5_70875426881D, this.camera_EF4843D2_FF34_0F4C_41EF_C0852A4899A4); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78B62BE_C8D5_D8BC_41E1_40A444E2FA52",
   "pitch": -24.82,
   "hfov": 17.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -31.83
  }
 ],
 "id": "overlay_D1E644EA_C44A_9005_41C5_BAA003B3977A",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC0912AB_FF34_09DC_41EE_5847ED64660C",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.4,
   "yaw": -175.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.56
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67, this.camera_EE4BF492_FF34_09CC_41C2_DA98559852B6); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16DABB6_C118_1A71_41D5_94BF62A94BA9",
   "pitch": -6.56,
   "hfov": 6.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.91
  }
 ],
 "id": "overlay_AC8B42BD_A26F_E465_41CF_C47B81F2CF14",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.42,
   "yaw": 33.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC, this.camera_EEBAC49C_FF34_09F4_41E7_BFC4CC6B5967); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16D6BB6_C118_1A71_41BF_04BA6D187904",
   "pitch": -4.43,
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.99
  }
 ],
 "id": "overlay_CD4287F9_C0E8_0845_41C1_A8A9F4409465",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.1,
   "yaw": -23.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.68
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_F0B6EF97_FF34_37F4_41CF_F79B3B21820F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16BBBB6_C118_1A71_41BB_186F0BABD61B",
   "pitch": -4.68,
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.07
  }
 ],
 "id": "overlay_ACFE315F_A260_24D9_41E0_66969BE2098C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 165.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.2
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3, this.camera_F0BBAFA3_FF34_37CC_41B2_238058553ECE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16B5BB6_C118_1A71_41CD_04C959651707",
   "pitch": -5.2,
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 165.01
  }
 ],
 "id": "overlay_CED9242C_C0F8_0FE8_41A3_0546CD86457A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.58,
   "yaw": 59.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.41
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C9AB0616_C44B_700D_41E5_70875426881D, this.camera_F0BCDFAD_FF34_37D4_41E0_68829AED5FA6); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79AB2BE_C8D5_D8BC_4189_721EC715696A",
   "pitch": -12.41,
   "hfov": 9.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.83
  }
 ],
 "id": "overlay_D2720191_C446_9007_41E1_0E2AF9024A15",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC3F728C_FF34_09D5_41E8_6B9477B25934",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0F2CFDF_FF34_3773_41EA_416144773FE8",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.54,
   "yaw": -154.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.88
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_EF1F7044_FF34_0955_41E2_22830CA7D158); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BBF2CD_C8D5_D8DF_41C1_6549C81446C9",
   "pitch": -3.88,
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.76
  }
 ],
 "id": "overlay_E8ADB2D0_C445_9005_41E8_3A0488AF4E3F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.85,
   "yaw": 84.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.03
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_EF0B604E_FF34_0955_41C2_D592599402B9); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BB92CD_C8D5_D8DF_41D2_61975D82B431",
   "pitch": -12.03,
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.27
  }
 ],
 "id": "overlay_E8AA5378_C446_B005_41E1_2428FC0F19A3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.07,
   "yaw": -48.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.12
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F, this.camera_EF11A03A_FF34_093D_41DD_6A47B2B8DB5C); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BAE2CD_C8D5_D8DF_419F_0AF07CA9848B",
   "pitch": -8.12,
   "hfov": 12.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.33
  }
 ],
 "id": "overlay_E8146B4F_C447_901B_41E5_3902415A1980",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF76B058_FF34_097D_41A9_33DEAA7DA3DE",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFB713E4_FF34_0F55_41EF_5C9DD03A7B62",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFA303EE_FF34_0F55_41DB_9D80433432AF",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.75,
   "yaw": -162.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.2
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A856030D_A220_65EA_41E3_78590B588A1B, this.camera_EF4F108B_FF34_09DC_41E4_A54F44FFE452); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1746BB6_C118_1A71_41E4_3862A6C71A11",
   "pitch": -7.2,
   "hfov": 13.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.77
  }
 ],
 "id": "overlay_AC9F9A67_A260_E4FA_41D2_742A26A60218",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.63,
   "yaw": 31.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.49
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_EF418081_FF34_09CC_41CA_FF57EB6A8724); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F177ABB6_C118_1A71_41CD_2B0AB77B1730",
   "pitch": -2.49,
   "hfov": 5.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.62
  }
 ],
 "id": "overlay_CEF110BF_C0F8_08A0_41E0_0C5FACFC06E7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.11,
   "yaw": 30.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.7
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_EFBB5095_FF34_09F4_41D5_53D8CA7310EB); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1775BB6_C118_1A71_41D5_F0D96D789E4C",
   "pitch": 0.7,
   "hfov": 3.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.41
  }
 ],
 "id": "overlay_CD791981_C0F8_795A_41D3_7B2DA9FFF0DA",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFC610E6_FF34_0954_41DE_51A36F561F1B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF7CC3A9_FF34_0FDC_41E6_7F482C842934",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0E3C312_FF34_08CC_41E4_B2F56D2F9369",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0BCCFAD_FF34_37D4_41E9_D463588507C0",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFAEB3F8_FF34_0F3D_41E5_19A310293314",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 24.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.9
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4, this.camera_ED336529_FF34_08DF_41E1_A80548784B3D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1757BC5_C118_1A13_41E8_2395589DA20B",
   "pitch": -2.9,
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.08
  }
 ],
 "id": "overlay_CED9E572_C0E8_09D8_41D3_6E3D9A3FB0F3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 127.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.06
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38, this.camera_EEE114F7_FF34_0934_41EF_448718303142); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1751BC5_C118_1A13_41E2_9D30B91AFAB1",
   "pitch": -2.06,
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.35
  }
 ],
 "id": "overlay_CE6C8DB7_C0E8_1951_41CA_7370AF8574DF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.91,
   "yaw": -105.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.32
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_EED1050B_FF34_08DC_41E1_8ECEEDE54F1A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F172BBC5_C118_1A13_41E6_C5F5D1217962",
   "pitch": -3.32,
   "hfov": 8.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.1
  }
 ],
 "id": "overlay_CEA988E7_C0E8_18E2_41E3_F5012BABA058",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.89,
   "yaw": -170.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.36
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E, this.camera_EEC0B515_FF34_08F7_41C6_3CF6ECA11167); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1720BC5_C118_1A13_41CE_4046364E1E81",
   "pitch": -5.36,
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.58
  }
 ],
 "id": "overlay_CD936216_C0E8_0B27_41A9_5E9C66DBBF9E",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF41E081_FF34_09CC_41E9_5C9D39342D1B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF4853D2_FF34_0F4C_41CD_5430DC993468",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC1F82A0_FF34_09CD_41D4_EC6812906A8E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF4F608B_FF34_09DC_41DD_955526F72FE9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EED671BA_FF34_0B3D_41DC_372B731A52A8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDCF9282_FF34_09CC_41E8_9953F8A4C80A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF9F60B3_FF34_0933_41D3_E23177B6E3E9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0F002E9_FF34_095F_41B8_D37BA22750C3",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.38,
   "yaw": 48.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.68
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E357DDAD_C44D_901F_41E3_4F08410EF208, this.camera_ED3101E1_FF34_0B4C_41C2_1E098CEC9A8B); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BFD2CD_C8D5_D8DF_41C0_940723B8F78C",
   "pitch": -10.68,
   "hfov": 14.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.51
  }
 ],
 "id": "overlay_F4DB4FA5_C446_900F_41C6_EABB7B78783D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.99,
   "yaw": 152.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.68
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB, this.camera_ED2151EB_FF34_0B5C_41E7_25426150DAA5); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BF32CD_C8D5_D8DF_41B6_CAD2AB5E2CBD",
   "pitch": 3.68,
   "hfov": 20.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 152.43
  }
 ],
 "id": "overlay_F4AEB3A0_C446_9005_41E3_35869A653FE2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.88,
   "yaw": -148.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.84
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_ED16C1F5_FF34_0B34_41EA_377B752183CA); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C7BE82CD_C8D5_D8DF_41DD_2B6308224250",
   "pitch": 1.84,
   "hfov": 9.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -148.46
  }
 ],
 "id": "overlay_F43971B1_C44A_B007_41AF_03C0D6508D70",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0D20FFE_FF34_3734_41BF_AE1FE0DA0483",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED22B53E_FF34_0B34_41E2_7BF61DA10738",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0D87008_FF34_08DC_41D0_7D77B7A0D9B8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF8EB0BD_FF34_0937_41EF_C447DDD0F817",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": 31.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.63
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73, this.camera_EC0902AB_FF34_09DC_41ED_CE23904DB619); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16FBBB6_C118_1A71_41AA_B4689A1A502C",
   "pitch": -9.63,
   "hfov": 8.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.47
  }
 ],
 "id": "overlay_AC94A021_A220_6409_41CC_6A982709BFCB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.66,
   "yaw": 2.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.73
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426, this.camera_EC1FA2A0_FF34_09CD_41EA_22390EE7245E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16F7BB6_C118_1A71_41D6_4CA05D437533",
   "pitch": -3.73,
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.86
  }
 ],
 "id": "overlay_AD722348_A221_E418_41D0_A8B117E10990",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.92,
   "yaw": -86.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.81
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C, this.camera_F0F032E9_FF34_095F_41E8_A3E845AB9310); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16F3BB6_C118_1A71_41D1_AA880DDD528E",
   "pitch": -7.81,
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.23
  }
 ],
 "id": "overlay_CEE1F898_C0E8_781B_41E2_1790A2C30915",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFFBA0C7_FF34_0953_41EB_56599B755231",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0EEE326_FF34_08D4_41E3_042C03B06FA8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE582488_FF34_09DC_41D6_1E4BCE95FC90",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEBAD153_FF34_0B73_417C_0C7808B5F6E8",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.66,
   "yaw": 83.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.49
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_F0E3F312_FF34_08CC_41E3_89D06288C5E3); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78A42BE_C8D5_D8BC_41E2_E4B9B1C41F56",
   "pitch": -1.49,
   "hfov": 5.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.66
  }
 ],
 "id": "overlay_DC99720E_C44B_701D_41D1_6B3382397419",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.66,
   "yaw": 130,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.57
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C9AB0616_C44B_700D_41E5_70875426881D, this.camera_F0EE9326_FF34_08D4_41EA_66FA0A0FDD38); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78A12BE_C8D5_D8BC_41D1_17C9A1D0875D",
   "pitch": -2.57,
   "hfov": 5.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 130
  }
 ],
 "id": "overlay_DC98A20E_C44B_701D_41E6_EAF78FC6A8BC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.44,
   "yaw": -41.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.58
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5, this.camera_F0E4B31C_FF34_08F4_41D0_5538A54C2BCA); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78982BE_C8D5_D8BC_41DB_02D1B918DF94",
   "pitch": -4.58,
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -41.34
  }
 ],
 "id": "overlay_DDBAA4D9_C43F_B007_41CF_881F56CC5F2D",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF6A63B3_FF34_0FCC_41B1_1264967B66A5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE4B613F_FF34_0B34_41D6_62126995C914",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFB8B095_FF34_09F4_41CF_D819D4C090D0",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.33,
   "yaw": -153.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.33
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426, this.camera_F0997FCB_FF34_3753_41D2_039DCDA9EAEA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16CABB6_C118_1A71_417C_8F0F3BBD1E17",
   "pitch": -3.33,
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -153.27
  }
 ],
 "id": "overlay_ACA42ABC_A220_247B_41C7_2311F2FD4EB0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.32,
   "yaw": 86.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.15
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9, this.camera_F0845FD5_FF34_3777_41E3_2BFA10D2805E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16C7BB6_C118_1A71_41B4_45CAF725DD20",
   "pitch": -5.15,
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 86.01
  }
 ],
 "id": "overlay_CEF34270_C0E8_0823_41E3_2AC3850B0763",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 121.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.83
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16C3BB6_C118_1A71_41D1_FE20F36D023B",
   "pitch": -2.83,
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 121.13
  }
 ],
 "id": "overlay_CF29F307_C0E8_09E2_41E2_3C45B4D81096",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.06,
   "yaw": -92.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.17
  }
 ],
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C78232CD_C8D5_D8DF_41BC_F5ACB65D5ED7",
   "pitch": 6.17,
   "hfov": 21.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.57
  }
 ],
 "id": "overlay_E8CC43F4_C4CA_B00D_41DC_2FFA880864F4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.19,
   "yaw": 141.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.73
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF, this.camera_EFF0A417_FF34_08F4_41DB_E36C317C720E); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C781C2CD_C8D5_D8DF_41CA_2E48968BBE16",
   "pitch": -9.73,
   "hfov": 19.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 141.97
  }
 ],
 "id": "overlay_E2D29C6E_C4CE_F01D_41C7_08810A03E337",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.54,
   "yaw": 133.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.45
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5, this.camera_EFE2B421_FF34_08CC_41DB_3C4D5B217938); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78142CD_C8D5_D8DF_41E6_318B54809194",
   "pitch": -3.45,
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 133.74
  }
 ],
 "id": "overlay_EE60D717_C44E_900B_41D3_B8D0C2C58144",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED92F246_FF34_0954_41E6_94D2FAECD463",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.96,
   "yaw": -49.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.12
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1, this.camera_EDCFB282_FF34_09CC_41EA_8D1A7AC6DDBF); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78BB2BE_C8D5_D8BC_41DD_D93E91C67FB8",
   "pitch": -25.12,
   "hfov": 9.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.05
  }
 ],
 "id": "overlay_D02F2827_C44E_F00B_41C6_1FF0FD06D53C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF135381_FF34_0FCC_41D3_10FFADD46AAD",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.25,
   "yaw": 14.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.34
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85B6467_A220_EC25_41D5_724B2DE821B4, this.camera_EFB703E4_FF34_0F55_41E4_B08E70A83B6D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16C7BB6_C118_1A71_416D_27D0E1868284",
   "pitch": -12.34,
   "hfov": 11.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.92
  }
 ],
 "id": "overlay_ACD7AEA5_A260_1C13_41D1_8E24B0FE9E3A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -126.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.5
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8A78F72_A220_1C3E_41CB_69834D123426, this.camera_EFA323EE_FF34_0F55_41DD_A12578981AE1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16C0BB6_C118_1A71_41C5_9AB01F86C368",
   "pitch": -2.5,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -126.92
  }
 ],
 "id": "overlay_CD2EA7FD_C0E8_0835_41C1_F9DC60C3007D",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE34E449_FF34_095F_41E0_28EA9A173198",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0C54358_FF34_0F7D_41EB_B89F9682DE84",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 37.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.96
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD, this.camera_EFD7B0DC_FF34_0974_41B9_69A84E62025C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F176CBB6_C118_1A71_41D5_A865016ECBFB",
   "pitch": -30.96,
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.16
  }
 ],
 "id": "overlay_AC99E647_A260_EC3B_41BA_47339CF4726A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 157.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.52
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685, this.camera_EE30F0F0_FF34_094C_41EA_C3EF63D0D07A); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1767BB6_C118_1A71_41E3_EA30513AA445",
   "pitch": -10.52,
   "hfov": 7.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.74
  }
 ],
 "id": "overlay_AC895057_A260_24DC_41C3_059FAEEA9364",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": -53.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.54
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_EE20A0FA_FF34_093C_41C0_A56E4BB9B5FC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1760BB6_C118_1A71_41D3_517088A9E937",
   "pitch": -16.54,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -53.47
  }
 ],
 "id": "overlay_CD0EAFB0_C0F8_3898_41A1_697BCE865217",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.06,
   "yaw": -63.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.09
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_EFC630E6_FF34_0954_41D1_1AFF77176BD1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F177ABB6_C118_1A71_41DD_B836614DC01B",
   "pitch": -2.09,
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.32
  }
 ],
 "id": "overlay_CD089D3A_C0F8_3995_41DB_CF6D89D6AA3A",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0B61F97_FF34_37F4_41EC_7BFC5A4D8279",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": 116.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.04
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871, this.camera_EF9AB402_FF34_08CD_41E4_2EF0E1838AB0); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BCE2DD_C8D5_D8FC_41E7_665E49661324",
   "pitch": -15.04,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.13
  }
 ],
 "id": "overlay_F537F918_C44A_9005_41B7_6E3F2B921291",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.11,
   "yaw": -173.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.96
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB, this.camera_EFA943F8_FF34_0F3D_4170_A394A8FC55BD); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BE12DD_C8D5_D8FC_41C0_F12A20381426",
   "pitch": -20.96,
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.71
  }
 ],
 "id": "overlay_F7092B3E_C446_907D_41B9_A459CDCF6DBF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.3,
   "yaw": -44.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.95
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_EF87340D_FF34_08D4_41EA_7719F645B701); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BD62DD_C8D5_D8FC_41DE_347EF22B86BF",
   "pitch": -43.95,
   "hfov": 15.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.82
  }
 ],
 "id": "overlay_F0B14F38_C45A_F005_41AD_B4A0B6C7C59B",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF5D83CA_FF34_0F5C_41A0_FB557455D0BB",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0D5B33A_FF34_0F3C_41E9_D3DBDE9537B2",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE65AF48_FF34_375D_41EB_979A2119FBDB",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.55,
   "yaw": -88.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.38
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5, this.camera_EED611BA_FF34_0B3D_41ED_5FB07CF22FF9); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78182CD_C8D5_D8DF_41E1_F92EAED610C1",
   "pitch": -5.38,
   "hfov": 9.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.91
  }
 ],
 "id": "overlay_E720C80D_C4DD_F01F_41DB_0234663FED69",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 2.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.76
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB, this.camera_EEC7A1CF_FF34_0B54_41B4_8E753E8B7A48); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78102CD_C8D5_D8DF_41CA_8014AA2D2D7D",
   "pitch": -17.76,
   "hfov": 19.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.55
  }
 ],
 "id": "overlay_E090A5BA_C4DB_B005_41E0_D78008468D04",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0D96344_FF34_0F54_41D4_6FCB22CEC2A8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED439227_FF34_08D3_4169_7F8CCD504A34",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0C0E34E_FF34_0F54_41EE_8ECE12B93028",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE30C0F0_FF34_094C_41AA_D70991ECE2DF",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE7FE474_FF34_0934_41E2_83738DBD833F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0926FC1_FF34_374F_41EC_A68ABCC2F3FA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF3E236C_FF34_0F55_41EE_098C56ED7291",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE85F188_FF34_0BDC_41DA_FF41E68BCDF9",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.33,
   "yaw": -96.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38, this.camera_EE658F48_FF34_375D_41D0_27D9BBD15BEF); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1709BC5_C118_1A13_41D6_A0B219941888",
   "pitch": -2.28,
   "hfov": 11.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.3
  }
 ],
 "id": "overlay_CEB1D156_C0E8_093E_41D9_FC21DD3AEC5D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.61,
   "yaw": 104.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.14
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE, this.camera_EE527F52_FF34_374D_41E1_7F5AA676BBC8); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1703BC5_C118_1A13_41E5_21F037C3CED5",
   "pitch": -2.14,
   "hfov": 6.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 104.26
  }
 ],
 "id": "overlay_CEAEA79D_C0E8_0937_41DF_46CAC7041674",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.59,
   "yaw": 35.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.87
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A, this.camera_EE42FF5C_FF34_3775_41D8_E4335EB58506); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F171ABC5_C118_1A13_41E5_E6BBD414F54E",
   "pitch": -4.87,
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 35.02
  }
 ],
 "id": "overlay_CF224B4F_C118_7902_41D2_E29C31393AD5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.61,
   "yaw": 174.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.13
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE, this.camera_EE7FEF40_FF34_374C_41E7_25351A1C82DF); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EB36449A_C118_0E85_41CB_963E3C405596",
   "pitch": -2.13,
   "hfov": 6.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 174.26
  }
 ],
 "id": "overlay_EBEC2670_C118_0D86_41B3_22A5F4A72E5C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE20B0FA_FF34_093C_41B5_40C972954E98",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED26A1EB_FF34_0B5C_41BB_38761DC94F1C",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.75,
   "yaw": 87.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.34
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5, this.camera_EFC5D43F_FF34_0934_41D5_0F35A99FBF47); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78FD2CD_C8D5_D8DF_41E2_85E68DFD7F1A",
   "pitch": -1.34,
   "hfov": 8.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 87.8
  }
 ],
 "id": "overlay_D82D9CCC_C4C5_701D_41E7_D6B9383D2AB9",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.75,
   "yaw": 52.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.42
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C, this.camera_EFEE142B_FF34_08DC_41E1_859D98EBF080); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78F22CD_C8D5_D8DF_41E7_9A7C11F16CF7",
   "pitch": -1.42,
   "hfov": 8.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 52.17
  }
 ],
 "id": "overlay_D9923192_C4C5_B005_41E0_08BFBA488F21",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.51,
   "yaw": -1.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.46
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF, this.camera_EE349449_FF34_095F_41EA_6CBEF6C73C44); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78ED2CD_C8D5_D8DF_41BA_59E194E4F3C5",
   "pitch": -7.46,
   "hfov": 12.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.16
  }
 ],
 "id": "overlay_D93819DB_C4CB_F03B_41C2_52B26135733A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.03,
   "yaw": -128.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.86
  }
 ],
 "data": {
  "label": "Arrow 09a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3432908_C4C7_7005_41E4_68FAA7254296, this.camera_EFD81435_FF34_0934_41E7_EA84F3020873); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78E42CD_C8D5_D8DF_41C6_59B61E788FCD",
   "pitch": -11.86,
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.4
  }
 ],
 "id": "overlay_E13518BA_C4CA_B005_41E0_7D89AC4CCC69",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.49,
   "yaw": -170.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_EF25E030_FF34_08CC_41BE_7FC7E9DFD6A0); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F168EBB6_C118_1A71_41E7_0B149D86E451",
   "pitch": -6.23,
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.17
  }
 ],
 "id": "overlay_ACC7DEED_A260_3DF5_41DD_25D12172FE88",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -80.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.14
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_EF3E4026_FF34_08D4_41E0_0638F3F7D37F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1687BB6_C118_1A71_41E2_3A856D273232",
   "pitch": -5.14,
   "hfov": 5.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.34
  }
 ],
 "id": "overlay_CEE9BA1E_C0F8_7BB3_41C8_BB11368BCBB2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -157.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.45
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E, this.camera_EF32401C_FF34_08F4_41D2_AC4B47E5F720); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C799B2BE_C8D5_D8BC_41D8_93C096E560A1",
   "pitch": -5.45,
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.62
  }
 ],
 "id": "overlay_CA516157_C44A_900B_41CB_573EE4859FA1",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFD86435_FF34_0934_4192_408BDC5E82E5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0F9F307_FF34_08D3_41D5_3A78E1D4034E",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.34,
   "yaw": 54.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.1
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC, this.camera_F0D21FFE_FF34_3734_41CA_DEA63C2B77F4); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78B12BE_C8D5_D8BC_41DD_B56AAB07E494",
   "pitch": -27.1,
   "hfov": 16.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 54.71
  }
 ],
 "id": "overlay_D0643B88_C44E_B005_41E1_DECE37AA476E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.25,
   "yaw": -122.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.82
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0, this.camera_F0E60FF4_FF34_3734_41A4_811BCA6C362F); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C79422BE_C8D5_D8BC_41E3_DC31F560CCB2",
   "pitch": -41.82,
   "hfov": 18.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.27
  }
 ],
 "id": "overlay_D295312D_C44A_B01F_41E1_4DD83188BFE6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.89,
   "yaw": 43.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.24
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD, this.camera_F0D5A33A_FF34_0F3C_41EC_901C7B47F5C4); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7BE12CD_C8D5_D8DF_41E0_1EB7A448E0F6",
   "pitch": -7.24,
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 43.17
  }
 ],
 "id": "overlay_F5481C04_C44D_900D_41E0_661E3B547E8A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.89,
   "yaw": 33.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.15
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD, this.camera_F0D25330_FF34_08CC_41EE_78D85947662C); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C7BD92DD_C8D5_D8FC_41E0_A43BED525861",
   "pitch": 1.15,
   "hfov": 9.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.11
  }
 ],
 "id": "overlay_F52EBD94_C44E_F00D_41A2_6E5E8CD042D8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.52,
   "yaw": 160.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.09
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38, this.camera_F0C57358_FF34_0F7D_41B7_0F7D3B149E6E); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F17ECBC5_C118_1A13_41B9_D50EF0709E05",
   "pitch": -3.09,
   "hfov": 16.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 160.47
  }
 ],
 "id": "overlay_CF42A1F7_C118_091D_41DC_2AFD6DED4C0C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED9D7250_FF34_094C_41E2_6E86EAC52781",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.85,
   "yaw": -48.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.88
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C, this.camera_EEF7E4E3_FF34_094C_41E7_27E580326D5B); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78332CD_C8D5_D8DF_41E0_27687378A44B",
   "pitch": -25.88,
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.96
  }
 ],
 "id": "overlay_E55E26BC_C4DA_907C_41D2_90D8F317F5A5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.76,
   "yaw": 75.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.84
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8795465_A220_6C25_41D5_DBAD541AD55C, this.camera_EDEC126E_FF34_0954_41D3_EFE4ACFB15A8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F161BBB6_C118_1A71_41E5_7F828A9B3BE3",
   "pitch": -7.84,
   "hfov": 8.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 75.1
  }
 ],
 "id": "overlay_AC4384C3_A220_6C00_41DB_3E09A6E23585",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.42,
   "yaw": 100.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.76
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9, this.camera_EDFCC264_FF34_0954_41E8_33FFA27EAA66); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1614BB6_C118_1A71_41E0_A34B07C4D961",
   "pitch": -3.76,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 100.94
  }
 ],
 "id": "overlay_B3A39E42_A220_3C06_41CF_4190B761A4B2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.83,
   "yaw": -117.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.43
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF, this.camera_EDDF8278_FF34_093C_41E6_DAA3EC37B585); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16EEBB6_C118_1A71_41C5_7F3EAB390A08",
   "pitch": -3.43,
   "hfov": 8.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -117.98
  }
 ],
 "id": "overlay_CD144CAC_C0E8_3800_41E0_DF3B677736D2",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0C44012_FF34_08CC_41E7_87BB5E2BB5F7",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF33A01C_FF34_08F4_41B9_5E5CC239364A",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.15,
   "yaw": -56.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.84
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF, this.camera_ED8D025A_FF34_097C_41E5_C9CE557FC826); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C782D2CD_C8D5_D8DF_41E4_245AC7EF40B8",
   "pitch": -11.84,
   "hfov": 10.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.71
  }
 ],
 "id": "overlay_E6B339EF_C4DA_901B_41BD_6783A0A4813F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.93,
   "yaw": -167.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.15
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C, this.camera_ED9D6250_FF34_094C_41E8_95906EB333E8); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C78222CD_C8D5_D8DF_41D9_2947E0C43393",
   "pitch": -29.15,
   "hfov": 19.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -167.63
  }
 ],
 "id": "overlay_E183755A_C4DE_9005_41E1_5A2752FEF640",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF19538B_FF34_0FDC_41EA_12DD9E7A04AC",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFD790DC_FF34_0974_41ED_10CD18A718F6",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED8D125A_FF34_097C_41E2_E250B40D6321",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF629063_FF34_094C_419F_85BC9817E95E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0996FCB_FF34_3753_41D9_57B5A1466FC6",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED3111E1_FF34_0B4C_41EF_C3807AFB6E79",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEAA3168_FF34_0B5C_41E1_9F44820739A8",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": 85.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.44
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8510386_A220_24E7_41C5_C72999B28587, this.camera_ED22A53E_FF34_0B34_41DA_54F40508B2A7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78B52BE_C8D5_D8BC_41C2_31C985978060",
   "pitch": -5.44,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 85.61
  }
 ],
 "id": "overlay_D21156D6_C447_900D_41E1_62F9BC7E3F63",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.89,
   "yaw": -30.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC99220D_C44B_701F_41C2_E48577CC5377, this.camera_ED12B548_FF34_0B5C_41DF_6EE919893B71); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78AF2BE_C8D5_D8BC_41D8_281A46B04E17",
   "pitch": -6.99,
   "hfov": 5.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.43
  }
 ],
 "id": "overlay_D34A20AF_C47D_901B_41C6_7C047E2AC6CF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.17,
   "yaw": -176.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0, this.camera_ED1CC552_FF34_0B4C_41EF_85CBE388B48F); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_EFE85EF2_FF34_394C_41D7_92033E70AF7F",
   "pitch": -10.1,
   "hfov": 7.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -176.37
  }
 ],
 "id": "overlay_D35B0D9C_F9B1_98F9_41E0_7E9B449FFEF1",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0A5CFB7_FF34_3734_41ED_8FE6D4B47393",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDB32231_FF34_08CF_41C9_354690B9F41D",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.72,
   "yaw": 0.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.97
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C, this.camera_EE2D1104_FF34_08D4_41D5_EE44314332E3); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78DD2CD_C8D5_D8DF_41DB_C4A42B61DD8D",
   "pitch": -9.97,
   "hfov": 17.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.4
  }
 ],
 "id": "overlay_DAFCAE2D_C4CE_901F_41E7_39E9FC44B010",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.79,
   "yaw": 40.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.63
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCACD847_C447_F00C_41E0_44022FB89EEB, this.camera_EE1D910E_FF34_08D4_41CB_DFDD9B1ABF80); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C78D22CD_C8D5_D8DF_41E6_9CD80455CA9E",
   "pitch": -9.63,
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.24
  }
 ],
 "id": "overlay_DBD08301_C4CA_9007_41A0_8F9A23FFC319",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.27,
   "yaw": -164.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.84
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92, this.camera_EE0DB116_FF34_08F4_41D5_0CCC7D5324A3); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_C78CD2CD_C8D5_D8DF_41D3_9807888BC3A1",
   "pitch": -37.84,
   "hfov": 25.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -164.72
  }
 ],
 "id": "overlay_E6F4FEA9_C4CA_9007_41D4_6FF4EEB047BC",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEE164F7_FF34_0934_41D5_65FAA83D9FAD",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFF0B417_FF34_08F4_41E7_3452D7961BE7",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0F9CFEA_FF34_375C_41E9_B12361EC227E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE2D6104_FF34_08D4_41E8_671C3CE3B00C",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.86,
   "yaw": 81.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.77
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD, this.camera_EE8664CE_FF34_0955_41C4_0BC624A67964); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7B972CD_C8D5_D8DF_41DF_D6DE8639C9C8",
   "pitch": -8.77,
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81.31
  }
 ],
 "id": "overlay_EAF1FB57_C47F_B00B_41C9_5945DE7E5B83",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 137.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.6
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3562B79_C44D_B007_41E4_DF55153B79CA, this.camera_EEA404A6_FF34_09D4_41E4_69A66A8EDCC5); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7B8D2CD_C8D5_D8DF_41E5_CAC687F4681C",
   "pitch": 12.6,
   "hfov": 3.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 137.63
  }
 ],
 "id": "overlay_EA312B26_C445_700C_41E3_F970C768AFA5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.81,
   "yaw": -44.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.3
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F, this.camera_EE9404C4_FF34_0955_41E8_2BE5E98D8F24); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7B842CD_C8D5_D8DF_41D7_375D094B5E43",
   "pitch": -14.3,
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.22
  }
 ],
 "id": "overlay_F1B3B2B2_C446_9005_41E6_A0D8A4B9E455",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.41,
   "yaw": -13.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.55
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB, this.camera_ED92E246_FF34_0954_41EB_8DCF20E627E9); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C7B322DD_C8D5_D8FC_41E5_F19CBDD4B4FE",
   "pitch": -16.55,
   "hfov": 11.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.97
  }
 ],
 "id": "overlay_F062D0F7_C45A_900C_41DC_4B9F1CF9317C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0F6C2F3_FF34_0933_41EB_AFA33AE7E22C",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.4,
   "yaw": -144.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.88
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9, this.camera_EEBAC153_FF34_0B73_41E2_B7C5D7ECA546); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16E8BB6_C118_1A71_41DA_B9CCA6E76E1E",
   "pitch": -7.88,
   "hfov": 8.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.56
  }
 ],
 "id": "overlay_AC90E7D2_A220_2C04_41E4_04BEE931BA6D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.69,
   "yaw": -162.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.37
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73, this.camera_EE4B113F_FF34_0B34_418D_A641600BAAEA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16E4BB6_C118_1A71_41D7_311F231EB050",
   "pitch": -5.37,
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.46
  }
 ],
 "id": "overlay_B30ADB6F_A220_641B_41C5_E89BB69E8254",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.41,
   "yaw": 14.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.4
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C, this.camera_EEAAC168_FF34_0B5C_41E6_7205FE320C27); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F16E1BB6_C118_1A71_41CE_98690E10222A",
   "pitch": -7.4,
   "hfov": 8.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.84
  }
 ],
 "id": "overlay_CEB5EF44_C0E8_1872_41DF_0B844A722642",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE0D8118_FF34_08FC_41D1_39B723A6DDDA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0E4831C_FF34_08F4_41DE_F1313C589F22",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.64,
   "yaw": 116.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.52
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_EE106455_FF34_0977_41E8_6AEC7B7E3747); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1683BB6_C118_1A71_41C8_44F9CF8405D7",
   "pitch": -24.52,
   "hfov": 9.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.49
  }
 ],
 "id": "overlay_ACE08B53_A260_24D0_41C1_4E3538E014CB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.5,
   "yaw": 82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.43
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85BA869_A220_642A_41A6_32FCBD974DCD, this.camera_EE217453_FF34_0973_41E5_93B582EBCCA7); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F169DBB6_C118_1A71_41E2_BCE05DE50EDC",
   "pitch": -18.43,
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82
  }
 ],
 "id": "overlay_B2437FE6_A26F_FBF0_41D8_1F20F2DC819B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.77,
   "yaw": 147.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.44
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1696BB6_C118_1A71_41DA_A6622FB46816",
   "pitch": -7.44,
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.42
  }
 ],
 "id": "overlay_ACFF7F24_A260_1C7C_41DF_316905D445A9",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.81,
   "yaw": -65.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.55
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_EE02945F_FF34_0973_41ED_B9641C44432A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79862BE_C8D5_D8BC_41E6_56ABEC3F824C",
   "pitch": -3.55,
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -65.63
  }
 ],
 "id": "overlay_CEB73011_C0F8_0789_41DB_466C3D60AA8D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.55,
   "yaw": -85.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.46
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E, this.camera_EE0D3469_FF34_095F_41E0_3D3020DC100A); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79822BE_C8D5_D8BC_41DA_ACAFA17F8649",
   "pitch": -7.46,
   "hfov": 6.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.61
  }
 ],
 "id": "overlay_CB5F2398_C445_B004_41AF_23E76E12DE9A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.55,
   "yaw": 165.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.25
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4, this.camera_EDA2F23C_FF34_0934_41E7_B6B1CB8F2BE6); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1771BC5_C118_1A13_41D4_36AC76C6D39D",
   "pitch": -6.25,
   "hfov": 11.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 165.33
  }
 ],
 "id": "overlay_AC85CE97_A260_3C59_41E1_FC3DB9C8D8C0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.21,
   "yaw": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.18
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685, this.camera_EDB3D231_FF34_08CF_41D0_9F32DFF72748); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_F1748BC5_C118_1A13_41E4_F14748345E96",
   "pitch": -7.18,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 4.62
  }
 ],
 "id": "overlay_CE8E36F1_C0E8_08B3_41B6_2563AEDCA45C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDFCD264_FF34_0954_41A3_4C84CDAD9D1B",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.97,
   "yaw": 145.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.98
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF, this.camera_EF55B077_FF34_0934_4197_8FDD42964B4D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_E8814008_C168_0609_41CB_9DAFC98D5250",
   "pitch": -4.98,
   "hfov": 8.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 145.29
  }
 ],
 "id": "overlay_E9D74FA1_C168_3A3A_41B2_ED6DF21B2A60",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE0D6469_FF34_095F_41E1_FD6B047FC844",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0844FD5_FF34_3777_41EE_D04067CB3011",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE6E347E_FF34_0934_41CC_BDF18DD0EE89",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFE590D2_FF34_094C_41E4_DE3D94816F93",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDDFE278_FF34_093C_41EC_972C19DA85BE",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE421F5C_FF34_3775_41CC_C4DCAEFE7D77",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF3E5026_FF34_08D4_41EE_A4FD00B5AEA2",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.2,
   "yaw": -87.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.19
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062, this.camera_EE859188_FF34_0BDC_41E0_4D6374C6755B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C796F2BE_C8D5_D8BC_41B1_71529968B5DB",
   "pitch": -1.19,
   "hfov": 9.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.94
  }
 ],
 "id": "overlay_CBDEB306_C446_900D_41C4_D3D4FDF26E9E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.03,
   "yaw": 17.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.16
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A84C7191_A220_24FA_41E2_8125807332B8, this.camera_EEE481B0_FF34_0BCD_41C0_BFE28CB75DE3); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79692BE_C8D5_D8BC_41DF_FA81CC66826A",
   "pitch": -11.16,
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 17.67
  }
 ],
 "id": "overlay_D4695117_C446_900B_41D6_F2A535964DB1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.77,
   "yaw": 53.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.96
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C, this.camera_EE945174_FF34_0B34_41D2_4577285FCB76); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C79632BE_C8D5_D8BC_41DC_4C6F7F18699E",
   "pitch": -11.96,
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.14
  }
 ],
 "id": "overlay_CAA32943_C445_700B_41D7_E671B2ED72FF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.2,
   "yaw": 139,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.75
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D, this.camera_EEF4A19C_FF34_0BF4_41E6_20EDEC8F87E0); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C795D2BE_C8D5_D8BC_41E4_56CFD08C4590",
   "pitch": -19.75,
   "hfov": 11.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 139
  }
 ],
 "id": "overlay_D51D41D9_C45E_9007_41E3_0C93D829869F",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EED1150B_FF34_08DC_41D3_37D142AE29AF",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF0AA395_FF34_0FF4_41E7_827C41648262",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF1F4044_FF34_0955_41EF_A6A75577333C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE214453_FF34_0973_41E0_9A25945B5E83",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEC7B1CF_FF34_0B54_41E4_336A9C54F1CB",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF87040D_FF34_08D4_41B6_0B5729581219",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF558077_FF34_0934_41EA_166E77D68194",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF5663C5_FF34_0F54_41E6_CF0A421A291A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED710209_FF34_08DC_41E5_76B1A0F5A6CD",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_F0F552FD_FF34_0937_41D3_B7A3504873D4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED01D1FF_FF34_0B34_41EE_E6740C8E2854",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC2E1296_FF34_09F5_41CF_DCCE1FD67707",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED60E213_FF34_08F3_41D4_765C8D35BBF7",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEF7C4E3_FF34_094C_41E7_8DF8C38D4D41",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE104455_FF34_0977_41C8_9394C0B1216E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF11B03A_FF34_093D_4185_B7FBC5B20CCA",
 "restartMovementOnUserInteraction": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F170FBC5_C118_1A13_41B4_C1421425162C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C791D2BE_C8D5_D8BC_41E0_C93F93EA102E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84E9764_A223_EC5A_41E1_348583B8A0AE_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79152BE_C8D5_D8BC_41D5_0D9AB2DEEE32",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C785F2CD_C8D5_D8DF_41D3_5A05F18F7209",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78562CD_C8D5_D8DF_41A8_7514C0240782",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C784F2CD_C8D5_D8DF_41C3_0B1DC6F62EBE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC85A7_C44D_B00B_41C4_601BABFFC0F8_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78462CD_C8D5_D8DF_41E2_783930EEE0F4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84EDCEA_A220_1C2E_41E0_9D8E0D0A197A_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1712BC5_C118_1A13_41D4_2641AD5A9841",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1637BB6_C118_1A71_41D0_5B5C414B2B35",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85C4EFD_A220_1C25_41DC_62930DEDCBAF_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F161EBB6_C118_1A71_41E1_BCE18021F306",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78742CD_C8D5_D8DF_41D9_07D9286737D6",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C786E2CD_C8D5_D8DF_41D3_49D54894B048",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3BC5750_C44D_9004_41DF_BA9A3FB400D5_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78642CD_C8D5_D8DF_41DA_1254C17AAFA1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1744BC5_C118_1A13_41C2_C6D07590D524",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84FD7DF_A220_2C65_41A2_B6A8BD2518D4_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F175FBC5_C118_1A13_41CF_7FCBE437A432",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BCF2DD_C8D5_D8FC_41E2_5F7A30EB7996",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BC42DD_C8D5_D8FC_41CA_5C0F975A9EF4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3447910_C44D_9005_41A1_F3AF5AE36DAB_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7B3A2DD_C8D5_D8FC_41DE_ABCAC90C040E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16DDBB6_C118_1A71_41C9_25C79394BF63",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16F1BB6_C118_1A71_41E7_1733A198E071",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8A78F72_A220_1C3E_41CB_69834D123426_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16CDBB6_C118_1A71_41E2_5C1006B51079",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16AEBB6_C118_1A71_41E4_571F4D6B76C4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84FDEE7_A220_1C26_41D1_010E19A2EF67_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16ABBB6_C118_1A71_41E2_D9D83B0EFCD5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1776BB6_C118_1A71_41CA_014FFED9ABDC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85BA869_A220_642A_41A6_32FCBD974DCD_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F174FBB6_C118_1A71_41D9_381037803008",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78C42CD_C8D5_D8DF_41D1_259A7B85C0E5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCA04A5E_C447_B03D_41E7_16CB5006041C_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C783A2CD_C8D5_D8DF_41D9_8C87A1458BAA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BA62CD_C8D5_D8DF_41E1_E838C6A0C194",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3B9B33D_C44D_907F_41BE_ACE88092554F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7B9E2CD_C8D5_D8DF_41E5_44DE9514215E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79522BE_C8D5_D8BC_41DC_2180002C36E3",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8E99C4D_C44B_F01F_41E4_195059958E1D_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C794D2BE_C8D5_D8BC_4199_61C96BA37B9C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C780F2CD_C8D5_D8DF_41DC_7F63A6E13BC6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C78062CD_C8D5_D8DF_41E5_296D7F77381B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E045452D_C4C6_901F_41E3_C26A4BEA43EF_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C787F2CD_C8D5_D8DF_41D1_EA45C9E3CD23",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F173ABC5_C118_1A13_41A8_8B9CD4D5CE08",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84DACEF_A220_1C26_41D5_7101A22B4B38_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1734BC5_C118_1A13_41D3_65D329E746B8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16A4BB6_C118_1A71_41E0_1042A5A5566B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16A1BB6_C118_1A71_41D5_89B73E25EF6E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84AA959_A220_246A_41B0_4B48C8EB28E3_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79BA2BE_C8D5_D8BC_41DD_06C1116B5E2B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78932BE_C8D5_D8BC_41E5_2CC968B89919",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78882BE_C8D5_D8BC_41E7_5D172863477A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAFFAE3_C447_900B_41DE_CA7B878451C5_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78832CD_C8D5_D8DF_41D5_003D0BD41FB5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79442BE_C8D5_D8BC_418C_6C3A4346CA37",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78BC2BE_C8D5_D8BC_41D0_CCC207FBBFFC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EDC262_C44B_9005_41C6_4873AE8CE6C0_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78B62BE_C8D5_D8BC_41E1_40A444E2FA52",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16DABB6_C118_1A71_41D5_94BF62A94BA9",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85B6467_A220_EC25_41D5_724B2DE821B4_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16D6BB6_C118_1A71_41BF_04BA6D187904",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16BBBB6_C118_1A71_41BB_186F0BABD61B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16B5BB6_C118_1A71_41CD_04C959651707",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8510386_A220_24E7_41C5_C72999B28587_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79AB2BE_C8D5_D8BC_4189_721EC715696A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BBF2CD_C8D5_D8DF_41C1_6549C81446C9",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BB92CD_C8D5_D8DF_41D2_61975D82B431",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E341D6F3_C44D_700B_41E3_89FD011B32BA_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BAE2CD_C8D5_D8DF_419F_0AF07CA9848B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1746BB6_C118_1A71_41E4_3862A6C71A11",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F177ABB6_C118_1A71_41CD_2B0AB77B1730",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84D7D5F_A220_1C65_41D8_C1D98FE8A685_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1775BB6_C118_1A71_41D5_F0D96D789E4C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1757BC5_C118_1A13_41E8_2395589DA20B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1751BC5_C118_1A13_41E2_9D30B91AFAB1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F172BBC5_C118_1A13_41E6_C5F5D1217962",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C91E4_A220_245A_41C4_EC9E43B327CE_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1720BC5_C118_1A13_41CE_4046364E1E81",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BFD2CD_C8D5_D8DF_41C0_940723B8F78C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BF32CD_C8D5_D8DF_41B6_CAD2AB5E2CBD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3481FB8_C44D_F004_41E5_7D83E87338BD_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C7BE82CD_C8D5_D8DF_41DD_2B6308224250",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16FBBB6_C118_1A71_41AA_B4689A1A502C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16F7BB6_C118_1A71_41D6_4CA05D437533",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85FE992_A220_24FF_41E3_B3A4FC6BDAC9_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16F3BB6_C118_1A71_41D1_AA880DDD528E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78A42BE_C8D5_D8BC_41E2_E4B9B1C41F56",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78A12BE_C8D5_D8BC_41D1_17C9A1D0875D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DC99220D_C44B_701F_41C2_E48577CC5377_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78982BE_C8D5_D8BC_41DB_02D1B918DF94",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16CABB6_C118_1A71_417C_8F0F3BBD1E17",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16C7BB6_C118_1A71_41B4_45CAF725DD20",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8AA948C_A220_2CEA_41D8_4608F3366B73_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16C3BB6_C118_1A71_41D1_FE20F36D023B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78232CD_C8D5_D8DF_41BC_F5ACB65D5ED7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C781C2CD_C8D5_D8DF_41CA_2E48968BBE16",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3432908_C4C7_7005_41E4_68FAA7254296_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78142CD_C8D5_D8DF_41E6_318B54809194",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8ECB874_C44B_900D_41E1_9B0D876704DC_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78BB2BE_C8D5_D8BC_41DD_D93E91C67FB8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16C7BB6_C118_1A71_416D_27D0E1868284",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8514984_A220_E4DA_41DE_E894BD2F88AC_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16C0BB6_C118_1A71_41C5_9AB01F86C368",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F176CBB6_C118_1A71_41D5_A865016ECBFB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1767BB6_C118_1A71_41E3_EA30513AA445",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1760BB6_C118_1A71_41D3_517088A9E937",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8552C45_A220_1C65_41D6_3F42DE19E91C_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F177ABB6_C118_1A71_41DD_B836614DC01B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BCE2DD_C8D5_D8FC_41E7_665E49661324",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BE12DD_C8D5_D8FC_41C0_F12A20381426",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3562B79_C44D_B007_41E4_DF55153B79CA_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BD62DD_C8D5_D8FC_41DE_347EF22B86BF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78182CD_C8D5_D8DF_41E1_F92EAED610C1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCA8B2C4_C447_900C_41CF_1ABC63D7F11C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_C78102CD_C8D5_D8DF_41CA_8014AA2D2D7D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1709BC5_C118_1A13_41D6_A0B219941888",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1703BC5_C118_1A13_41E5_21F037C3CED5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F171ABC5_C118_1A13_41E5_E6BBD414F54E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A85251F7_A223_E425_41DB_3ADDD1A8314E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EB36449A_C118_0E85_41CB_963E3C405596",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78FD2CD_C8D5_D8DF_41E2_85E68DFD7F1A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78F22CD_C8D5_D8DF_41E7_9A7C11F16CF7",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_C78ED2CD_C8D5_D8DF_41BA_59E194E4F3C5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAF4787_C447_900B_41E3_F5C9616CEC92_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_C78E42CD_C8D5_D8DF_41C6_59B61E788FCD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F168EBB6_C118_1A71_41E7_0B149D86E451",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1687BB6_C118_1A71_41E2_3A856D273232",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A859DDFE_A220_1C27_41D4_6BFB09B50062_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C799B2BE_C8D5_D8BC_41D8_93C096E560A1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78B12BE_C8D5_D8BC_41DD_B56AAB07E494",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8E8AF37_C44B_900B_41E5_791C4FC9FBB1_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79422BE_C8D5_D8BC_41E3_DC31F560CCB2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7BE12CD_C8D5_D8DF_41E0_1EB7A448E0F6",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E357DDAD_C44D_901F_41E3_4F08410EF208_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C7BD92DD_C8D5_D8FC_41E0_A43BED525861",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84EB752_A220_2C7F_41A7_FA89B5FBFFCC_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F17ECBC5_C118_1A13_41B9_D50EF0709E05",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCB6AB22_C447_7005_41D7_FE232BEA612D_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78332CD_C8D5_D8DF_41E0_27687378A44B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F161BBB6_C118_1A71_41E5_7F828A9B3BE3",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1614BB6_C118_1A71_41E0_A34B07C4D961",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AF77D80A_A220_23F7_41E1_849BB3AE508C_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16EEBB6_C118_1A71_41C5_7F3EAB390A08",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C782D2CD_C8D5_D8DF_41E4_245AC7EF40B8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCACD847_C447_F00C_41E0_44022FB89EEB_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78222CD_C8D5_D8DF_41D9_2947E0C43393",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78B52BE_C8D5_D8BC_41C2_31C985978060",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78AF2BE_C8D5_D8BC_41D8_281A46B04E17",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C9AB0616_C44B_700D_41E5_70875426881D_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFE85EF2_FF34_394C_41D7_92033E70AF7F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78DD2CD_C8D5_D8DF_41DB_C4A42B61DD8D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78D22CD_C8D5_D8DF_41E6_9CD80455CA9E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAD58EE_C447_901D_41E0_70B21C055AEF_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C78CD2CD_C8D5_D8DF_41D3_9807888BC3A1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7B972CD_C8D5_D8DF_41DF_D6DE8639C9C8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C7B8D2CD_C8D5_D8DF_41E5_CAC687F4681C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E347F0E6_C44D_F00C_41CA_095F88A9DECD_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7B842CD_C8D5_D8DF_41D7_375D094B5E43",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E3B9148A_C44E_9005_41D0_0BE297FFC871_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C7B322DD_C8D5_D8FC_41E5_F19CBDD4B4FE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16E8BB6_C118_1A71_41DA_B9CCA6E76E1E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16E4BB6_C118_1A71_41D7_311F231EB050",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8795465_A220_6C25_41D5_DBAD541AD55C_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F16E1BB6_C118_1A71_41CE_98690E10222A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1683BB6_C118_1A71_41C8_44F9CF8405D7",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F169DBB6_C118_1A71_41E2_BCE05DE50EDC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1696BB6_C118_1A71_41DA_A6622FB46816",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79862BE_C8D5_D8BC_41E6_56ABEC3F824C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A84C7191_A220_24FA_41E2_8125807332B8_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79822BE_C8D5_D8BC_41DA_ACAFA17F8649",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1771BC5_C118_1A13_41D4_36AC76C6D39D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A856030D_A220_65EA_41E3_78590B588A1B_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F1748BC5_C118_1A13_41E4_F14748345E96",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A95BEF9F_A220_1CE6_41DB_DA829F569848_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E8814008_C168_0609_41CB_9DAFC98D5250",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C796F2BE_C8D5_D8BC_41B1_71529968B5DB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79692BE_C8D5_D8BC_41DF_FA81CC66826A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C79632BE_C8D5_D8BC_41DC_4C6F7F18699E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C8EC75AF_C44B_B01B_41B6_D7A1C5A9722E_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C795D2BE_C8D5_D8BC_41E4_56CFD08C4590",
 "rowCount": 6,
 "frameCount": 24
}],
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "class": "Player",
 "contentOpaque": false,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "data": {
  "name": "Player485"
 },
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
