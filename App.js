import * as React from 'react';
import {View} from 'react-native';
import BalaoDaSorte from "./src/components/BalaoDaSorte";
import estilo from "./src/estilo";

export default function App() {
    return (
        <View style={estilo.container}>
            <BalaoDaSorte/>
        </View>
    );
}


