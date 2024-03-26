import { StyleProp, ViewStyle } from "react-native";

export interface ApartmentProps {
  id: number;
  latitude: number;
  longitude: number;
  price: number;
  title: string;
  numberOfStars: number;
  rating: number;
  image: string;
}

export interface ApartmentListItemProps {
  apartment: ApartmentProps;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface CustomMarkerProps {
  apartment: ApartmentProps;
  onPress?: () => void;
}
