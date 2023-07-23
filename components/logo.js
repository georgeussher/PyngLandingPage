import * as React from "react"
import Svg, { Path,  } from "react-native-svg"
import { View } from 'react-native';


export default function Logo(){
    return (
    <View > 
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={268}
    height={97}
    fill="none"
  >
    <Path
      fill="#A010A3"
      d="m1.915 53.538 19.892-20.172c.623-.633 1.681-.19 1.681.695v41.23a.989.989 0 0 1-.28.695L3.316 96.442c-.623.633-1.681.19-1.681-.695V54.233c-.031-.253.093-.506.28-.695Z"
    />
    <Path
      fill="#FE07C8"
      d="M54.876.98v31.902a.989.989 0 0 1-.28.696L34.735 54.034c-.623.632-1.681.19-1.681-.695V23.207c0-.537-.436-1.012-.997-1.012H2.39c-.872 0-1.307-1.075-.685-1.707L21.847.285A.958.958 0 0 1 22.53 0h31.38c.53 0 .965.443.965.98Z"
    />
    <Path
      fill="#000"
      d="M244.707 11.64h-.634c-12.779 0-23.156 10.512-23.292 23.524v.325a24.806 24.806 0 0 0 6.344 16.578c3.942 4.4 9.38 7.317 15.453 7.826.408.046.77.046 1.178.046h1.042l1.042-.046c.091 0 .227 0 .318-.046l2.311-.278c.045 0 .136 0 .181-.046.045 0 .136-.047.181-.047.136-.046.272-.046.363-.092a3.34 3.34 0 0 0 .725-.185c.226-.047.498-.14.725-.186.09-.046.226-.046.317-.092l.408-.14c.226-.092.453-.138.68-.23 0 0 .045 0 .09-.047.182-.093.408-.14.589-.232h.046l.679-.278h.046c.226-.092.453-.185.634-.277.227-.093.453-.232.68-.325.227-.092.589-.324.816-.416.045-.047.09-.047.136-.093l.362-.185v3.241c0 3.335-1.314 6.345-3.444 8.521-2.13 2.177-5.121 3.149-8.338 3.52-2.447.324-4.849-.88-6.752-2.27-2.402-1.713-5.665-1.389-7.749.695a6.271 6.271 0 0 0-1.813 4.446c0 1.898.816 3.75 2.493 5 2.99 2.224 7.522 4.261 14.138 4.215C257.623 83.973 268 72.998 268 59.8V35.49c0-13.152-10.423-23.849-23.293-23.849Zm11.465 25.099c0 .093 0 .185-.045.324 0 .185-.045.417-.091.602 0 .185-.045.417-.09.602s-.091.37-.136.602c-.045.093-.045.185-.091.278l-.272.834c-.045.185-.136.37-.181.555l-.136.278c-.091.185-.136.37-.226.51-.091.185-.182.324-.272.509-.318.556-.68 1.065-1.043 1.574a.797.797 0 0 1-.181.232c-.181.231-.362.463-.589.648-.045.047-.045.093-.091.093l-3.172 2.315c-.272.14-.543.232-.815.37-.091.047-.182.093-.272.093-.091.047-.182.093-.272.093-.181.046-.363.139-.544.185-.272.093-.589.14-.906.232-.182.046-.363.092-.544.092-.091 0-.181.047-.272.047-.181 0-.317.046-.498.046h-.997c-.408 0-.816 0-1.224-.046-.181 0-.362-.047-.544-.093h-.045c-.181-.046-.363-.046-.544-.093h-.045c-.136-.046-.272-.046-.408-.092-.136-.047-.272-.093-.453-.14-.091-.045-.181-.045-.272-.092l-.408-.139-.68-.278c-.136-.046-.271-.138-.407-.185-.046-.046-.136-.046-.182-.092 0 0-.045 0-.045-.047-.045 0-.091-.046-.136-.046a3.994 3.994 0 0 1-.453-.278c-.181-.092-.363-.185-.544-.324a.998.998 0 0 1-.227-.139c-.181-.093-.317-.231-.453-.324l-.679-.556c-.046-.046-.136-.092-.182-.139l-.408-.416c-.135-.14-.271-.278-.362-.417-.091-.093-.181-.232-.272-.324l-.045-.047c-.046-.046-.091-.139-.136-.185-.046-.092-.136-.139-.181-.231a.82.82 0 0 0-.182-.232.797.797 0 0 0-.181-.232c-.045-.046-.045-.092-.091-.138-.136-.232-.271-.417-.407-.649-.046-.092-.091-.139-.136-.231-.091-.186-.227-.417-.318-.602l-.136-.278a1.41 1.41 0 0 1-.181-.463c-.045-.185-.136-.324-.181-.51a2.303 2.303 0 0 0-.181-.509c0-.046-.046-.093-.046-.185-.045-.093-.045-.232-.09-.37 0-.093-.046-.14-.046-.232v-.093c-.045-.139-.045-.278-.09-.417v-.092c0-.093 0-.14-.046-.232v-.278c-.045-.231-.045-.51-.09-.74v-.927c0-1.667.317-3.241.906-4.723.317-.741.68-1.39 1.088-2.038.09-.139.226-.324.317-.463.045-.092.091-.139.181-.231a8.02 8.02 0 0 1 .544-.649l.408-.416c.181-.186.408-.417.634-.602.091-.047.136-.14.227-.186l.68-.555c.181-.093.317-.232.453-.325.498-.324.997-.602 1.495-.833.181-.093.363-.139.544-.232a11.38 11.38 0 0 1 4.35-.833l4.305.833c.181.093.363.14.544.232l1.495.833c.182.093.318.232.454.325.181.139.407.277.589.463l.543.463.408.416c.227.232.408.417.589.649.091.093.182.231.272.37.272.325.499.695.725 1.065.318.463.59.973.816 1.529.045.092.091.185.091.277.589 1.436.951 3.01.951 4.724-.136.324-.136.602-.136.926ZM215.16 36.213v18.442c0 3.396-2.64 6.132-5.917 6.132-3.277 0-5.917-2.736-5.917-6.132V36.213c0-6.791-5.325-12.31-11.879-12.31-6.553 0-11.878 5.519-11.878 12.31v18.442c0 3.396-2.64 6.132-5.917 6.132-3.277 0-5.917-2.736-5.917-6.132V36.213c0-13.583 10.605-24.573 23.712-24.573 13.108-.047 23.713 10.99 23.713 24.573ZM162.076 19.17v40.613c0 14.118-10.82 25.673-24.039 25.576-6.52-.048-10.82-2.03-13.582-4.206-3.033-2.369-3.305-7.059-.679-9.863 2.037-2.176 5.161-2.563 7.56-.919 1.947 1.354 4.482 2.514 7.108 2.37 3.26-.146 6.202-1.403 8.33-3.675s3.441-5.415 3.441-8.896v-3.385s-.045 0-.045.049a.945.945 0 0 0-.272.193 2.532 2.532 0 0 0-.317.194c-.226.145-.453.241-.679.338-.226.097-.453.242-.679.339-.226.096-.408.193-.634.29h-.045l-.679.29s-.046 0-.046.048c-.181.097-.407.145-.588.242-.045 0-.045 0-.091.048-.226.097-.452.145-.679.242h-.045c-.136.048-.226.096-.362.096-.091.049-.227.049-.317.097-.226.049-.498.145-.724.194-.227.048-.498.145-.725.193-.136.048-.226.048-.362.097-.136.048-.226.048-.362.096-.227.049-.408.097-.634.097-.091 0-.181.048-.272.048-.135 0-.271.049-.407.049-.136 0-.226.048-.362.048h-.091a8.943 8.943 0 0 1-1.177.097h-1.811c-.407 0-.815-.049-1.177-.049-12.133-1.015-21.776-12.232-21.776-25.48V19.22c0-3.481 2.626-6.286 5.886-6.286 3.259 0 5.885 2.805 5.885 6.286V35.996c0 .145.045.29.045.386 0 .097 0 .145.046.242 0 .097 0 .145.045.242 0 .048 0 .097.045.193 0 .145.045.29.091.435v.097c0 .097.045.194.045.29 0 .097.045.194.09.29.046.145.046.29.091.435 0 .049.045.145.045.194.046.097.046.145.091.242v.048c0 .048.045.097.045.145.045.097.045.193.091.29.045.145.09.29.181.483v.049c0 .048.045.048.045.097 0 .048 0 .048.045.048 0 .048 0 .048.046.048.09.194.181.387.226.532l.136.29c.045.048.045.145.09.194.046.096.091.193.181.338.046.097.091.193.136.242.045.096.136.193.181.338 0 .049.046.049.046.049.09.145.226.338.316.483.046.097.136.145.182.242 0 .048.045.048.045.096.045.049.045.097.09.097l.046.048c.09.097.181.242.271.339.136.145.227.29.362.435l.408.435c.136.097.226.242.362.339l.045.048.046.048c.135.097.271.242.407.339.136.096.317.241.453.338.136.097.271.194.452.29.046.049.091.049.136.097.136.097.272.193.408.242.136.048.226.145.362.193 0 0 .045 0 .045.049.045.048.091.048.181.096h.046c.135.049.271.145.407.194.091.048.181.096.272.096l.815.29c.09.049.181.049.271.097.136.048.317.097.453.145.136.049.272.049.407.097h.046c.181.048.362.048.543.096.181.049.407.049.588.097.408.049.815.049 1.223.049 1.856 0 3.576-.436 5.116-1.258l3.214-2.417c.045-.048.045-.097.09-.097l.182-.193s0-.048.045-.048l.045-.049c.045-.048.091-.145.136-.193.045-.048.09-.145.181-.194l.181-.193v-.048c.045-.049.091-.145.136-.194.045-.048.045-.096.09-.145a.852.852 0 0 1 .182-.241l.271-.435c.045-.049.045-.097.091-.097l.271-.435c.091-.194.181-.339.272-.532.091-.194.181-.387.226-.532l.136-.29c.091-.194.136-.387.181-.58.317-.967.544-1.983.679-3.046 0-.097 0-.194.046-.339.045-.338.045-.628.045-.967V19.364c0-3.481 2.626-6.286 5.885-6.286 3.305-.193 5.976 2.611 5.976 6.092Z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M81.983 11.807c-9.199 1.438-16.788 7.906-19.588 16.695-1.167 3.664-1.188 4.194-1.113 28.023l.07 21.978.49.909c2.037 3.776 6.716 4.501 9.735 1.508 1.835-1.82 1.854-1.945 1.854-12.22v-8.735l8.034-.085c7.817-.084 8.092-.101 10.166-.657 6.933-1.855 12.426-6.36 15.619-12.808 6.806-13.742-.867-30.278-15.82-34.097-2.425-.62-7.129-.874-9.447-.511Zm6.277 12.199c2.101.49 3.92 1.539 5.694 3.28 2.434 2.39 3.635 5.25 3.635 8.654 0 5.198-3.544 9.92-8.611 11.472-1.276.39-2.079.431-8.478.431h-7.07l.004-6.758c.004-7.477.127-8.468 1.354-10.878.384-.754 1.34-2.029 2.128-2.839 3.002-3.084 7.206-4.33 11.344-3.362Z"
      clipRule="evenodd"
    />
    </Svg>
    </View>
    );
}
