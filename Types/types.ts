import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomescreenButton = {
    bgColor : string,
    content : string,
    height : number,
    width : number,
    pressFunction : ()=> void;
}

