import { FC } from 'react';

interface TabDataType {
    /**
     * Id for data object
     * Type: string | name
     * Default: ""
     */
    id: string | number;
    /**
     * Icon for tab bar editor
     * Type: JSX Element
     * Default: ""
     * Description: you can pass icon JSX in here
     */
    icon: JSX.Element;
    /**
     * Filename for tab bar editor
     * Type: string
     * Default: ""
     * Description: giving name with the extention file like .tsx .js etc
     */
    filename: string;
    /**
     * Content code for editor
     * Type: string[]
     * Default: ""
     * Description: pass your code in here
     */
    content: string;
    /**
     * Language code
     * Type: string
     * Default: ""
     * Description: pass your language code in here
     */
    lang: string;
}
interface IdeComponentType {
    /**
     * Array of object data to render in editor
     * Type: TabDataType[]
     * Default: ""
     */
    datas: TabDataType[];
}
declare const IdeComponent: FC<IdeComponentType>;

export { IdeComponent as default };