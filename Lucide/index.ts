import {IInputs, IOutputs} from "./generated/ManifestTypes";
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import Icon from './components/Icon';

export class Lucide implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container: HTMLDivElement;
    private _reactRoot: any;
    private _notifyOutputChanged: () => void;

    constructor()
    {

    }

   
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this._container = container;
        this._reactRoot = createRoot(this._container);
        this._notifyOutputChanged = notifyOutputChanged;
    }


    
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        const iconName = context.parameters.iconName.raw || '';
        const color = context.parameters.color.raw || 'currentColor';
        const size = context.parameters.size.raw || 24

        this._reactRoot.render(React.createElement(Icon, {
            iconName,
            color,
            size,
            context: context
        }))
    }

   
    public getOutputs(): IOutputs
    {
        return {};
    }

    
    public destroy(): void
    {
        ReactDOM.unmountComponentAtNode(this._container);
    }
}
