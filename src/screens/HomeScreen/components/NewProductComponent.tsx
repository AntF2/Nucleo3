import React from 'react'
import { View } from 'react-native'
import { Divider, Icon, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper'
import { styles } from '../../../theme/styles';

interface Props {
    showModalProduct: boolean;
    setShowModalProduct: Function;
}

export const NewProductComponent = ({ showModalProduct, setShowModalProduct }: Props) => {
    return (
        <Portal>
            <Modal visible={showModalProduct} contentContainerStyle={styles.modal}>
                <View style={styles.header}>
                    <Text variant='headlineSmall'>Nuevo producto</Text>
                    <View style={styles.Icon}>
                    <IconButton
                    icon='close'
                    size={30}
                    onPress={() => {setShowModalProduct(false)}}
                    />
                    </View>
                </View>
                <Divider/>
                <TextInput
                    label='Código'
                    mode='outlined'
                />
                <TextInput
                    label='Nombre'
                    mode='outlined'
                />
                
                <View style={styles.rootInputsProducts}>
                <TextInput
                    label='Precio'
                    mode='outlined'
                    keyboardType='numeric'
                    style={{width: '49%'}}
                />
                <TextInput
                    label='Stock'
                    mode='outlined'
                    keyboardType='numeric'
                    style={{width: '49%'}}
                />
                </View>
                <TextInput
                label={'Descripción'}
                mode='outlined'
                multiline
                numberOfLines={3}
                />
            </Modal>
        </Portal>
    )
}
