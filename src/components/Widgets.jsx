import React from "react";
import '../css/widgets.css';
import { useTranslation } from "react-i18next";
export default function Widgets() {
    const {t} = useTranslation();
  return (
    <div>
      <div className="widgets">
        <div className="widgets-heading">
          <h2>{t("5 Reasons To Shop With Us")}</h2>
        </div>
      <div className="widgets-responsive-section">

      <div className="widgets-inner-content" >
       
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000080" stroke="none"> <path d="M680 1986 c-209 -57 -349 -269 -311 -473 23 -124 85 -221 181 -283 l50 -32 0 -148 c0 -136 2 -150 23 -181 16 -24 36 -38 69 -48 36 -11 48 -20 53 -40 33 -135 208 -188 308 -93 34 32 57 73 57 101 0 18 10 19 218 23 119 1 242 1 274 0 55 -4 56 -4 63 -38 7 -42 53 -96 99 -118 72 -34 177 -11 226 51 12 15 26 47 33 70 11 42 12 43 55 43 33 0 48 6 67 26 33 36 40 95 28 254 l-10 135 -71 123 c-99 170 -99 170 -151 200 -44 26 -53 27 -203 30 l-158 4 0 43 c0 28 -7 51 -21 69 -39 50 -65 56 -238 56 l-159 0 -25 43 c-87 147 -290 229 -457 183z m245 -106 c101 -49 177 -155 190 -265 13 -99 -32 -216 -109 -283 -171 -150 -429 -97 -524 106 -23 48 -27 71 -27 142 0 73 4 93 28 142 34 70 109 140 180 167 73 29 192 25 262 -9z m563 -222 c16 -16 17 -709 2 -739 -10 -18 -23 -19 -199 -19 l-188 0 -31 39 c-17 21 -46 45 -65 55 -78 36 -186 9 -230 -59 -16 -26 -29 -35 -49 -35 -40 0 -48 25 -48 152 l0 113 103 0 c94 0 107 3 168 31 163 78 254 223 247 396 l-3 78 140 0 c96 0 145 -4 153 -12z m412 -175 c15 -9 38 -33 50 -55 l21 -38 -55 0 c-31 0 -58 0 -61 0 -3 0 -19 -7 -36 -15 -43 -23 -59 -69 -59 -169 0 -92 10 -128 42 -163 20 -22 29 -23 155 -23 l134 0 -3 -57 -3 -58 -35 -3 c-30 -2 -38 2 -57 32 -63 98 -222 99 -300 1 -24 -30 -34 -35 -70 -35 l-43 0 0 300 0 300 146 0 c118 0 151 -3 174 -17z m163 -236 c18 -36 27 -70 27 -101 l0 -47 -117 3 -118 3 -3 98 -3 97 94 0 93 0 27 -53z m-1073 -346 c14 -10 29 -34 34 -53 12 -47 -9 -88 -56 -111 -70 -35 -138 10 -138 91 0 57 56 106 110 96 14 -3 36 -13 50 -23z m895 14 c117 -56 41 -231 -79 -181 -76 32 -85 127 -17 173 40 27 52 28 96 8z"></path> <path d="M835 1725 c-33 -41 -64 -75 -68 -75 -5 0 -31 18 -58 41 l-49 41 -24 -29 c-14 -15 -26 -31 -26 -35 0 -6 88 -84 143 -126 l29 -21 82 102 c45 56 86 108 90 115 9 14 -29 62 -48 62 -6 0 -38 -34 -71 -75z"></path> </g> </svg>
          <h2>{t("Ships from Riyadh across Saudi Arabia")}</h2>
        
      </div>

      <div className="widgets-inner-content" >
       
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000080" stroke="none"> <path d="M835 2316 c-198 -40 -377 -76 -398 -80 -82 -15 -145 -109 -133 -198 3 -18 7 -76 11 -128 3 -52 7 -122 10 -155 7 -90 13 -184 25 -350 28 -407 28 -406 62 -515 29 -91 99 -224 158 -297 60 -75 162 -162 246 -209 72 -40 411 -194 428 -194 21 0 402 177 459 213 126 81 249 220 321 364 73 147 81 198 121 773 42 610 41 559 16 608 -22 44 -66 77 -111 86 -197 39 -794 149 -820 151 -19 2 -197 -29 -395 -69z m616 -67 c118 -22 300 -56 404 -75 230 -42 237 -47 229 -147 -5 -71 -51 -733 -60 -877 -16 -250 -120 -466 -294 -607 -74 -60 -155 -104 -352 -192 l-137 -61 -193 88 c-106 48 -212 102 -236 119 -107 78 -193 175 -250 283 -73 135 -95 240 -112 520 -6 91 -17 260 -25 375 -30 419 -30 418 -9 442 16 18 75 33 394 97 206 41 387 75 401 75 14 1 122 -17 240 -40z"></path> <path d="M865 2126 c-182 -36 -321 -69 -336 -79 -14 -10 -34 -32 -44 -51 -17 -31 -17 -46 -6 -222 21 -342 47 -686 57 -738 26 -145 129 -320 246 -417 75 -62 119 -87 269 -155 68 -30 138 -61 156 -69 17 -8 33 -15 36 -15 7 0 142 62 286 132 112 54 132 68 210 146 158 159 205 274 227 557 57 744 56 734 37 773 -34 68 -38 69 -348 127 -77 14 -198 37 -269 50 -70 14 -147 25 -170 24 -22 -1 -180 -29 -351 -63z m465 -46 c144 -26 530 -99 556 -105 33 -7 40 -39 32 -138 -4 -51 -14 -194 -23 -318 -32 -484 -35 -502 -97 -628 -32 -64 -60 -103 -120 -163 -72 -73 -88 -84 -225 -149 -82 -39 -162 -77 -179 -84 -30 -12 -39 -10 -182 55 -176 79 -268 144 -340 238 -102 135 -126 217 -147 507 -8 116 -21 306 -30 424 -13 180 -13 218 -2 235 12 17 64 30 318 82 167 34 311 62 319 63 8 0 62 -8 120 -19z"></path> <path d="M1355 1411 l-159 -158 -66 53 -65 54 -27 -30 c-16 -17 -28 -34 -28 -39 0 -11 170 -153 185 -155 6 0 99 84 206 187 l194 189 -33 29 c-18 16 -36 29 -40 29 -4 0 -79 -72 -167 -159z"></path> </g> </svg>
          <h2>{t("Safety Tested")}</h2>
        
      </div>


      <div className="widgets-inner-content" >
       
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000080" stroke="none"> <path d="M602 1233 l3 -898 610 0 610 0 3 215 c2 118 0 230 -3 248 -8 46 -34 39 -62 -18 -21 -40 -23 -58 -23 -202 l0 -158 -525 0 -525 0 0 810 0 810 220 0 220 0 0 -111 c0 -61 4 -119 10 -129 18 -34 65 -40 336 -40 l264 0 0 -119 0 -118 24 4 c13 3 33 0 45 -6 l21 -12 0 198 0 198 -308 110 -307 110 -308 3 -307 3 2 -898z m838 713 c102 -37 201 -74 220 -81 31 -12 9 -14 -207 -14 l-243 -1 0 83 c0 90 4 101 29 88 9 -5 99 -39 201 -75z"></path> <path d="M850 1630 l0 -40 368 0 368 0 -4 40 -4 40 -364 0 -364 0 0 -40z"></path> <path d="M850 1450 l0 -40 349 0 349 0 16 25 c37 57 49 55 -349 55 l-365 0 0 -40z"></path> <path d="M1735 1470 c-22 -11 -56 -19 -76 -20 -31 0 -40 -6 -63 -40 -14 -22 -39 -46 -56 -55 -25 -13 -30 -22 -30 -52 0 -20 -10 -57 -21 -81 l-22 -44 22 -38 c11 -21 21 -55 21 -77 0 -35 4 -42 35 -59 19 -10 35 -21 35 -23 0 -3 -32 -63 -71 -133 -39 -71 -68 -132 -65 -135 3 -3 34 7 70 22 35 15 69 25 74 21 6 -3 13 -34 17 -68 13 -112 15 -111 87 39 62 131 68 139 106 154 l40 17 11 -27 c5 -14 27 -75 48 -134 l39 -108 24 70 c34 104 29 101 109 48 39 -26 73 -47 76 -47 6 0 -3 24 -70 174 -51 116 -55 131 -41 141 10 8 16 27 16 49 0 20 9 55 20 76 l20 40 -20 40 c-11 21 -20 57 -20 79 0 34 -4 42 -35 60 -20 11 -45 36 -56 56 -18 31 -26 35 -60 35 -22 0 -57 9 -79 20 -46 24 -36 24 -85 0z m79 -65 c11 -8 33 -15 49 -15 37 0 127 -89 127 -126 0 -14 7 -38 15 -55 14 -27 14 -32 0 -51 -8 -13 -15 -39 -15 -60 0 -30 -5 -40 -28 -53 -15 -9 -35 -30 -44 -46 -13 -22 -24 -29 -48 -29 -17 0 -44 -7 -60 -15 -27 -14 -33 -14 -60 0 -16 8 -41 15 -55 15 -36 0 -125 89 -125 125 0 15 -8 40 -17 56 -16 27 -16 31 0 64 9 20 17 48 17 63 0 20 8 32 30 44 17 9 35 29 42 43 8 19 19 25 42 25 17 0 42 7 56 14 33 18 51 19 74 1z m169 -472 c8 -16 18 -39 22 -52 7 -23 7 -23 -16 -7 -24 16 -24 16 -40 -21 l-16 -38 -16 48 c-15 44 -15 47 2 47 10 0 24 11 31 25 7 14 15 25 16 25 2 0 10 -12 17 -27z m-283 -33 c0 -5 -10 -30 -22 -56 -21 -41 -23 -44 -29 -22 -5 23 -14 25 -58 12 l-23 -7 23 41 c22 39 27 42 67 42 23 0 42 -4 42 -10z"></path> <path d="M1702 1339 c-109 -54 -133 -185 -51 -274 67 -73 165 -81 239 -19 42 36 59 73 61 131 2 60 -10 90 -53 129 -60 56 -126 67 -196 33z m124 -55 c42 -20 64 -59 64 -112 0 -33 -6 -45 -35 -71 -38 -33 -80 -40 -129 -21 -31 11 -66 65 -66 100 0 37 36 89 73 105 42 18 52 18 93 -1z"></path> <path d="M1153 1312 l-303 -2 0 -40 0 -40 298 0 299 0 10 23 c5 12 7 31 4 42 -6 20 -13 20 -308 17z"></path> <path d="M850 1095 l0 -45 305 0 305 0 0 26 c0 14 -5 34 -10 45 -10 18 -24 19 -305 19 l-295 0 0 -45z"></path> <path d="M850 935 l0 -45 314 0 315 0 21 30 c43 60 44 60 -320 60 l-330 0 0 -45z"></path> <path d="M850 760 l0 -40 269 0 c268 0 269 0 283 23 39 61 56 57 -262 57 l-290 0 0 -40z"></path> <path d="M850 580 l0 -40 365 0 c401 0 375 -4 359 58 l-6 22 -359 0 -359 0 0 -40z"></path> </g> </svg>
          <h2>{t("SLicensed Merchandise")}</h2>
        
      </div>

      <div className="widgets-inner-content" >
       
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000080" stroke="none"> <path d="M1300 2241 c-77 -25 -142 -80 -171 -146 -13 -30 -19 -81 -25 -202 l-7 -163 -76 0 c-88 0 -139 -19 -188 -70 -64 -65 -64 -68 -61 -556 l3 -441 30 -48 c21 -33 47 -57 84 -78 l54 -31 436 0 436 -1 50 26 c62 32 110 93 124 159 14 65 15 777 1 849 -14 73 -58 133 -122 165 -45 22 -65 26 -145 26 l-93 0 0 151 c0 87 -5 168 -12 191 -15 50 -79 123 -131 150 -45 22 -145 33 -187 19z m150 -101 c22 -11 51 -37 65 -57 24 -36 25 -43 25 -195 l0 -158 -175 0 -175 0 0 143 c0 116 4 149 19 182 43 95 149 132 241 85z m386 -516 c15 -11 37 -33 48 -48 20 -27 21 -41 24 -447 3 -414 2 -421 -19 -458 -12 -21 -38 -48 -59 -60 -37 -20 -49 -21 -450 -21 -405 0 -413 0 -451 22 -25 14 -46 37 -59 63 -19 39 -20 62 -20 443 0 433 1 443 52 490 14 13 38 27 54 32 16 5 214 8 441 7 399 -2 412 -3 439 -23z"></path> <path d="M1290 1391 c-43 -23 -80 -84 -80 -134 0 -37 19 -87 46 -117 11 -13 11 -37 1 -138 l-13 -122 125 0 124 0 -6 53 c-21 180 -21 190 7 231 50 75 29 180 -46 226 -42 25 -112 26 -158 1z"></path> </g> </svg>
          <h2>{t("Secure Payments")}</h2>
        
      </div>

      <div className="widgets-inner-content" >
       
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000080" stroke="none"> <path d="M820 1961 c0 -23 -5 -30 -22 -33 -20 -3 -24 -11 -30 -68 -4 -36 -10 -84 -13 -107 l-6 -43 -290 0 -289 0 0 -24 c0 -15 -7 -26 -19 -29 -15 -3 -19 -18 -25 -78 -4 -41 -20 -194 -36 -342 -17 -147 -30 -278 -30 -292 l0 -25 170 0 c94 0 170 -3 170 -8 0 -13 -20 -175 -25 -210 l-6 -32 334 0 335 0 6 24 c5 22 9 24 36 16 35 -10 34 -24 16 148 l-12 122 73 0 73 0 0 -27 c0 -16 -7 -86 -15 -158 -8 -71 -15 -136 -15 -142 0 -10 68 -13 305 -13 308 0 312 0 306 34 -1 4 13 6 31 2 l34 -6 -13 127 c-6 70 -10 129 -8 131 2 2 96 3 209 2 113 0 228 2 256 6 44 6 50 9 50 30 0 13 1 24 3 24 1 0 17 -4 35 -9 38 -11 37 -16 22 124 -5 50 -18 187 -29 305 -12 118 -23 236 -27 263 l-6 47 -319 0 -319 0 0 -25 c0 -18 -5 -25 -20 -25 -16 0 -20 -7 -21 -32 -2 -51 -39 251 -39 316 l0 36 -415 0 -415 0 0 -29z m772 -101 c31 -295 39 -374 43 -435 3 -38 8 -87 11 -107 5 -33 3 -38 -14 -38 -23 0 -27 18 -37 160 -8 108 -11 146 -25 300 -7 69 -13 136 -14 150 0 14 -5 29 -11 33 -5 4 1 7 15 5 23 -3 26 -8 32 -68z m-109 -62 c3 -35 8 -81 11 -103 3 -22 12 -107 20 -190 9 -82 19 -167 22 -187 l6 -38 -121 0 c-114 0 -121 -1 -121 -20 0 -13 -7 -20 -19 -20 -15 0 -19 -11 -25 -61 -3 -34 -6 -77 -6 -95 l0 -34 -84 0 c-84 0 -84 0 -90 28 -6 30 -26 234 -26 270 0 21 -3 22 -105 22 l-105 0 -2 53 c0 28 -3 63 -4 77 -8 60 -13 279 -7 318 l6 42 322 0 322 0 6 -62z m841 -150 c6 -29 23 -187 36 -343 24 -266 24 -265 7 -265 -16 0 -19 22 -38 285 -6 83 -13 161 -15 175 -1 14 -6 54 -10 90 -4 36 -12 68 -18 72 -6 5 -2 8 11 8 15 0 24 -7 27 -22z m-1554 10 c0 -2 7 -66 15 -143 14 -132 11 -166 -13 -151 -5 3 -12 49 -16 103 -4 54 -9 117 -12 140 l-6 42 -72 4 -71 3 88 2 c48 1 87 1 87 0z m1474 -60 c5 -23 30 -252 47 -428 5 -52 12 -116 15 -142 l7 -48 -236 0 -236 0 -5 53 c-3 28 -8 81 -11 117 -12 134 -10 130 -72 130 l-55 0 5 43 c4 23 12 99 19 170 l12 127 253 0 253 0 4 -22z m-1550 -55 c3 -38 9 -92 12 -120 l7 -53 -117 0 -116 0 0 -25 c0 -15 -6 -25 -15 -25 -18 0 -20 -13 -35 -155 -6 -60 -14 -129 -17 -152 l-5 -43 -149 0 c-103 0 -149 3 -149 11 0 17 60 559 66 597 l5 32 253 0 253 0 7 -67z m310 -222 c7 -10 20 -127 41 -366 18 -198 18 -195 1 -195 -16 0 -18 14 -41 265 -9 94 -19 200 -24 238 -6 51 -4 67 5 67 7 0 15 -4 18 -9z m-70 -68 c3 -16 12 -98 21 -183 9 -85 20 -188 26 -228 5 -40 9 -87 9 -103 l0 -29 -285 0 c-157 0 -285 1 -285 3 0 11 32 305 46 421 l18 146 222 0 222 0 6 -27z m856 -60 c0 -27 7 -106 14 -178 27 -250 30 -298 15 -293 -17 6 -23 44 -43 288 -9 107 -18 203 -20 213 -3 11 2 17 15 17 16 0 19 -7 19 -47z m-79 0 c0 -5 2 -19 5 -33 2 -14 13 -110 24 -215 11 -104 23 -207 26 -227 l6 -38 -267 0 -266 0 6 43 c14 103 45 405 45 439 l0 38 210 0 c116 0 210 -3 211 -7z"></path> <path d="M977 1818 c-19 -10 -23 -53 -7 -63 6 -4 22 -24 36 -46 58 -92 153 -124 225 -76 52 35 122 133 115 161 -7 29 -31 39 -58 25 -17 -9 -19 -17 -14 -50 5 -33 2 -43 -24 -72 -61 -70 -129 -70 -190 -1 -26 30 -29 40 -24 72 5 33 3 39 -18 49 -16 7 -30 8 -41 1z"></path> <path d="M1853 1583 c-18 -7 -16 -39 5 -65 64 -81 106 -107 157 -94 34 9 86 56 109 100 17 33 18 38 5 52 -25 25 -50 7 -47 -33 2 -29 -4 -41 -30 -64 -35 -31 -66 -36 -107 -17 -31 14 -58 60 -49 82 4 9 1 23 -6 31 -13 16 -17 17 -37 8z"></path> <path d="M293 1573 c-7 -2 -13 -13 -13 -24 0 -22 8 -34 66 -95 37 -39 46 -44 85 -44 40 0 48 5 96 56 54 56 68 96 38 108 -31 11 -47 -5 -42 -41 8 -48 -24 -83 -84 -90 -42 -5 -47 -3 -76 30 -23 26 -29 42 -25 62 6 34 -14 51 -45 38z"></path> <path d="M579 1240 c-1 -5 -2 -16 -3 -22 -1 -7 13 -29 31 -48 18 -19 33 -37 33 -41 0 -4 13 -12 29 -19 40 -16 92 1 126 43 14 18 30 37 35 44 6 7 10 22 10 33 0 16 -5 21 -22 18 -18 -2 -24 -12 -29 -40 -12 -77 -91 -104 -143 -49 -16 16 -25 34 -21 40 11 19 -5 51 -26 51 -10 0 -20 -4 -20 -10z"></path> <path d="M1582 1178 c-7 -7 -8 -17 -1 -29 17 -33 -32 -89 -78 -89 -32 0 -77 44 -78 76 0 22 -5 30 -22 32 -15 2 -23 -2 -23 -11 0 -19 55 -94 79 -106 32 -17 76 -13 106 11 31 24 66 94 58 115 -6 16 -25 17 -41 1z"></path> </g> </svg>
          <h2>{t("Largest Collection")}</h2>
        
      </div>


      </div>

      </div>
    </div>
  );
}
