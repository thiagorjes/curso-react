import './device.css'
import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import DeviceForm from './deviceForm'
import DeviceList from './deviceList'
import Panel from '../common/widget/panel'

class Device extends Component {
    render() {
        const devices = [{
            "id": 1,
            "attributes": {},
            "groupId": 0,
            "name": "Celular Calixto",
            "uniqueId": "calixtocell",
            "status": "offline",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 5,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 2,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 3,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 4,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 5,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 6,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 7,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        },
        {
            "id": 8,
            "attributes": {},
            "groupId": 0,
            "name": "PPD3C08",
            "uniqueId": "  Thiago Car",
            "status": "online",
            "lastUpdate": "2021-02-19 18:06:03",
            "positionId": 6,
            "geofenceIds": [],
            "phone": "",
            "model": "E3+",
            "contact": "",
            "category": null,
            "disabled": false
        }
        ];
        return (
            <div>
                <ContentHeader title='Dispositivos' small='Crie e edite seus dispositivos' />
                <Content>
                    <Panel title='Selecione para editar:'>
                        <DeviceList
                            headers={[{
                                    name: 'Id',
                                    selector: 'id',
                                    sortable: true,
                                    width: '40px !important'
                                    
                                }, 
                                { 
                                    name: 'Identificador', 
                                    selector: 'uniqueId', 
                                    sortable: true,
                                    width: '100px'
                                }, 
                                { 
                                    name: 'Modelo', 
                                    selector: 'model', 
                                    sortable: true,
                                    width: '65px' 
                                }, 
                                { 
                                    name: 'Nome', 
                                    selector: 'name', 
                                    sortable: true,
                                    width: '110px' 
                                }, 
                                { 
                                    name: 'Status', 
                                    selector: 'status', 
                                    sortable: true,
                                    width: '80px'
                                }, 
                                { 
                                    name: 'Última atualização', 
                                    selector: 'lastUpdate', 
                                    sortable: true,
                                    width: '165px' 
                                }, 
                                { 
                                    name: 'Ativo', 
                                    selector: 'disabled', 
                                    sortable: true,
                                    width: '70px',
                                    cell: row => (row.disabled?'Não':'Sim')
                                }]}
                            devices={devices}
                            title='Rastreadores cadastrados para sua conta'
                            cols='6 6 6 6'
                        />
                        <DeviceForm cols='6 6 6 6' ></DeviceForm>
                    </Panel>
                </Content>
            </div>
        )
    }
}

export default Device

