import React from 'react'
import { View } from 'react-native'
import { IconButton, Text } from 'react-native-paper'
import { styles } from '../../../theme/styles'

export const ProductCardComponent = () => {
    return (
        <View style={styles.rootListProduct}>
            <View>
                <Text variant='labelLarge'>Nombre:</Text>
                <Text variant='bodyMedium'>Precio:</Text>
                <Text variant='bodyMedium'>Stock:</Text>
                <Text variant='bodyMedium'>Descripción:</Text>
                <Text variant='bodyMedium'>Código:</Text>
            </View>
            <View style={styles.Icon}>
                <IconButton
                    icon='cart-plus'
                    size={25}
                    mode='contained'
                />
            </View>
        </View>
    )
}
