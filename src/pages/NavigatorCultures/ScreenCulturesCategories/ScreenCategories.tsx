import { Icon, ListItem, Pressable, Text } from '@react-native-material/core'
import { View } from "react-native"
import { Spoiler } from '../../../atoms/Spoilers/Spoiler'
import { ScrollView } from 'react-native-gesture-handler'


export const ScreenCategories = () => {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ borderBottomColor: '#aaa', borderStyle: 'solid', borderBottomWidth: 1 }}>
                <Pressable style={{ height: 48, display: 'flex', justifyContent: 'center', paddingLeft: 16 }}>
                    <Text style={{ color: '#333', fontSize: 16 }}>Сьедобные культуры</Text>
                </Pressable>
            </View>
            <Spoiler title="Плодовые овощи">
                <ListItem title="Баклажаны" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Фасоль" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лук" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Огурец" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Патиссон" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Перец" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Помидоры" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Тыква" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Ягоды">
                <ListItem title="Клубника" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Земляника" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Арбуз" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Дыня" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Крыжовник" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Физалис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Малина" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Груша" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ананас" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Фасоль" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Томатилло" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Яблоня" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Черешня" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Цитрус">
                <ListItem title="Лимон" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лайм" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Апельсин" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Грейпфрут" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Мандарин" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Клементин" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Померанец" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Бергамот" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кумкват" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Цедрат" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Бобовые">
                <ListItem title="Горох" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Фасоль" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Чечевица" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Нут" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Соя" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Адзуки" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Маш" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Люпин" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Корнеплоды">
                <ListItem title="Редис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Редька" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Морковь" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Картофель" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Морковь" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Свекла" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Репа" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лук-порей" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Пастернак" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Сельдерей" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Листовые овощи">
                <ListItem title="Шпинат" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Укроп" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Петрушка" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Салат" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Руккола" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Капуста" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Брокколи" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кольраби" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Мангольд" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Горчичные листья" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Савойская капуста" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Крестоцветные">
                <ListItem title="Капуста" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Репа" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Редька" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Редис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Редька" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Горчица" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кольраби" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кочанная капуста" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Китайская капуста" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кабачки" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Руккола" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Горчица" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Луковичные овощи">
                <ListItem title="Лук" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лук-шалот" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Чеснок" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Горчица" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Шалфей" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Бобовые овощи">
                <ListItem title="Фасоль" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Горох" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Аспаргус" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Корневые овощи">
                <ListItem title="Хрен" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Черный корень" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ямс" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Корневой женьшень" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кольраби" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Репа" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Брюссельская капуста" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Брокколи" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Другие овощи">
                <ListItem title="Чабер" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Артишок" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Оливки" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Рисовые ростки" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Съедобные цветы">
                <ListItem title="Настурция" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Бузульник" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Имбирь" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Календула" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Петуния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ромашка" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Череда" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Хризантема" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Каперсы" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <View style={{ marginTop: 20, borderBottomColor: '#aaa', borderStyle: 'solid', borderBottomWidth: 1 }}>
                <Pressable style={{ height: 48, display: 'flex', justifyContent: 'center', paddingLeft: 16 }}>
                    <Text style={{ color: '#333', fontSize: 16 }}>Цветочные культуры</Text>
                </Pressable>
            </View>
            <Spoiler title="Однолетние цветы">
                <ListItem title="Антуриум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Бегония" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Газания" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Георгина" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Гелихризум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Георгиния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Жоржина" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ирис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Календула" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Космея" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Маргаритка" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Настурция" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Петуния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Подсолнух" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Роза" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Сальвия" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Снежноягодник" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Тагетес" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Циния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Тюльпан" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Многолетние">
                <ListItem title="Астильба" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Барвинок" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Вероника" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Виола" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Геум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Дельфиниум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Жасмин" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Жимолость" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ирис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кампанула" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лаванда" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ландыш" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лилия" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Мальва" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Василёк" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Монарда" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Пион" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Роза" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <View style={{ marginTop: 20, borderBottomColor: '#aaa', borderStyle: 'solid', borderBottomWidth: 1 }}>
                <Pressable style={{ height: 48, display: 'flex', justifyContent: 'center', paddingLeft: 16 }}>
                    <Text style={{ color: '#333', fontSize: 16 }}>Экзотические культуры</Text>
                </Pressable>
            </View>
            <Spoiler title="Кактусы">
                <ListItem title="Антуриум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Бегония" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Газания" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Георгина" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Гелихризум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Георгиния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Жоржина" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ирис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Календула" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Космея" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Маргаритка" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Настурция" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Петуния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Подсолнух" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Роза" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Сальвия" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Снежноягодник" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Тагетес" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Циния" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Тюльпан" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
            <Spoiler title="Многолетние">
                <ListItem title="Астильба" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Барвинок" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Вероника" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Виола" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Геум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Дельфиниум" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Жасмин" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Жимолость" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ирис" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Кампанула" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лаванда" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Ландыш" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Лилия" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Мальва" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Василёк" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Монарда" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Пион" leading={<Icon name='navigate-next' title='title' />} />
                <ListItem title="Роза" leading={<Icon name='navigate-next' title='title' />} />
            </Spoiler>
        </ScrollView>
    )
}
