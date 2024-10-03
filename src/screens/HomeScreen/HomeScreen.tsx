import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Avatar, Button, Divider, FAB, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper'
import { styles } from '../../theme/styles'
import { auth } from '../../config/firebaseConfig';
import firebase from '@firebase/auth';
import { updateProfile } from 'firebase/auth';
import { FlatList } from 'react-native-gesture-handler';
import { ProductCardComponent } from './components/ProductCardComponent';
import { NewProductComponent } from './components/NewProductComponent';

interface FormUser {
    name: string;
}

interface Product {
    id: string;
    code: string;
    nameProduct: string;
    stock: number;
    price: number;
    description: string;
}

export const HomeScreen = () => {

    const [formUser, setFormUser] = useState<FormUser>({
        name: '',
    });

    const [userData, setUserData] = useState<firebase.User | null>(null);

    const [products, setProducts] = useState<Product[]>([
        {
            id: '1',
            code: '001',
            nameProduct: 'Leche',
            stock: 20,
            price: 1.00,
            description: 'Leche Vita 1lt'
        },
        {
            id: '2',
            code: '002',
            nameProduct: 'Pan',
            stock: 20,
            price: 0.15,
            description: 'Pan entero'
        },
        {
            id: '3',
            code: '003',
            nameProduct: 'Cafe',
            stock: 20,
            price: 2.00,
            description: 'Cafe Juan Valdez'
        },
        {
            id: '4',
            code: '004',
            nameProduct: 'Agua',
            stock: 20,
            price: 1.00,
            description: 'Agua Cielo'
        },
        {
            id: '5',
            code: '005',
            nameProduct: 'Cerveza',
            stock: 20,
            price: 2.50,
            description: 'Cerveza Pilsener'
        },
        {
            id: '6',
            code: '006',
            nameProduct: 'Queso',
            stock: 20,
            price: 1.50,
            description: 'Queso Manchego'
        },
        {
            id: '7',
            code: '007',
            nameProduct: 'Coca Cola',
            stock: 20,
            price: 1.00,
            description: 'Coca Cola Lata'
        },
        {
            id: '8',
            code: '008',
            nameProduct: 'Yogurt',
            stock: 20,
            price: 0.50,
            description: 'Yogurt Toni'
        },
        {
            id: '9',
            code: '009',
            nameProduct: 'Galletas',
            stock: 20,
            price: 0.75,
            description: 'Galletas Nestle'
        }
    ]);

    const [showModalProfile, setShowModalProfile] = useState<boolean>(false);

    const [showModalProduct, setShowModalProduct] = useState<boolean>(false);

    const handleSetValues = (key: string, value: string) => {
        setFormUser({ ...formUser, [key]: value });
    }

    useEffect(() => {

        setUserData(auth.currentUser);
        setFormUser({ name: auth.currentUser?.displayName ?? 'NA' });
    }, []);

    const handleUpdateUser = async () => {
        try {
            await updateProfile(userData!,
                { displayName: formUser.name });
        } catch (e) {
            console.log(e);
        }
        setShowModalProfile(false);

    }

    return (
        <>
            <View style={styles.rootHome}>
                <View style={styles.header}>
                    <Avatar.Text size={50} label='AF' />
                    <View>
                        <Text variant='bodySmall'>Bienvenid@</Text>
                        <Text variant='labelLarge'>{userData?.displayName}</Text>
                    </View>
                    <View style={styles.Icon}>
                        <IconButton
                            icon="account-edit"
                            size={30}
                            mode='contained'
                            onPress={() => setShowModalProfile(true)}
                        />
                    </View>
                </View>
                <View>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <ProductCardComponent />}
                    />
                </View>
            </View>
            <Portal>
                <Modal visible={showModalProfile} contentContainerStyle={styles.modal}>
                    <View style={styles.header}>
                        <Text variant='headlineSmall'>Mi perfil</Text>
                        <View style={styles.Icon}>
                            <IconButton
                                icon='close'
                                size={20}
                                onPress={() => setShowModalProfile(false)} />
                        </View>
                    </View>
                    <Divider />
                    <TextInput
                        mode='outlined'
                        label='Nombre'
                        value={formUser.name}
                        onChangeText={(value) => handleSetValues('name', value)}
                    />
                    <TextInput
                        mode='outlined'
                        label={'Email'}
                        value={userData?.email!}
                    />
                    <Button mode='contained' onPress={handleUpdateUser}> Actualizar</Button>
                </Modal>
            </Portal>
            <FAB
                icon="plus"
                style={styles.fabProduct}
                onPress={() => setShowModalProduct(true)}
            />
            <NewProductComponent showModalProduct={showModalProduct} setShowModalProduct={setShowModalProduct}/>
        </>
    )
}
