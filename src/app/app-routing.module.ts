import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// IMPORTACION COMPONENTES
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VistarolgestorComponent } from './components/vistarolgestor/vistarolgestor.component';
import { VistaroladminComponent } from './components/vistaroladmin/vistaroladmin.component';
import { RoladmingestoresComponent } from './components/roladmingestores/roladmingestores.component';
import { VistarolfacturadorComponent } from './components/vistarolfacturador/vistarolfacturador.component';
import { RoladminfacturadoresComponent } from './components/roladminfacturadores/roladminfacturadores.component';
import { RoladminclientesComponent } from './components/roladminclientes/roladminclientes.component';
import { RoladminsucursalesComponent } from './components/roladminsucursales/roladminsucursales.component';
import { RoladminempresasComponent } from './components/roladminempresas/roladminempresas.component';
import { RoladminfinalsucursalesComponent } from './components/roladminfinalsucursales/roladminfinalsucursales.component';
import { RolgestorcategoriasComponent } from './components/rolgestorcategorias/rolgestorcategorias.component';
import { RoladminusuariosComponent } from './components/roladminusuarios/roladminusuarios.component';
import { RoladmincategoriasyproductosComponent } from './components/roladmincategoriasyproductos/roladmincategoriasyproductos.component';
import { RoladmincateComponent } from './components/roladmincate/roladmincate.component';
import { RolgestorempresasComponent } from './components/rolgestorempresas/rolgestorempresas.component';
import { RolgestorsucursalesComponent } from './components/rolgestorsucursales/rolgestorsucursales.component';
import { RolgestorproductosComponent } from './components/rolgestorproductos/rolgestorproductos.component';
import { VerGananciasComponent } from './components/ver-ganancias/ver-ganancias.component';
import { VistarolclienteComponent } from './components/vistarolcliente/vistarolcliente.component';
import { RolclientesucursalesComponent } from './components/rolclientesucursales/rolclientesucursales.component';
import { RolclienteproductosComponent } from './components/rolclienteproductos/rolclienteproductos.component';
import { RoladminrepartidoresComponent } from './components/roladminrepartidores/roladminrepartidores.component';
import { RoladmincajerosComponent } from './components/roladmincajeros/roladmincajeros.component';
import { RolclientecarritoComponent } from './components/rolclientecarrito/rolclientecarrito.component';
import { RolclientecategoriasComponent } from './components/rolclientecategorias/rolclientecategorias.component';
import { EditarroladminComponent } from './components/editarroladmin/editarroladmin.component';
import { EditarrolcajeroComponent } from './components/editarrolcajero/editarrolcajero.component';
import { VistarolcajeroComponent } from './components/vistarolcajero/vistarolcajero.component';
import { EditarrolclienteComponent } from './components/editarrolcliente/editarrolcliente.component';
import { EditarrolfacturadorComponent } from './components/editarrolfacturador/editarrolfacturador.component';
import { EditarrolgestorComponent } from './components/editarrolgestor/editarrolgestor.component';
import { VistarolrepartidorComponent } from './components/vistarolrepartidor/vistarolrepartidor.component';
import { EditarrolrepartidorComponent } from './components/editarrolrepartidor/editarrolrepartidor.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VerpedidosclienteComponent } from './components/verpedidoscliente/verpedidoscliente.component';
import { PagocreditopedidosComponent } from './components/pagocreditopedidos/pagocreditopedidos.component';
import { RolcajeroversucursalesComponent } from './components/rolcajeroversucursales/rolcajeroversucursales.component';
import { RolrepartidorversucursalesComponent } from './components/rolrepartidorversucursales/rolrepartidorversucursales.component';
import { RolfacturadorversucursalesComponent } from './components/rolfacturadorversucursales/rolfacturadorversucursales.component';
import { RolcajerotareasComponent } from './components/rolcajerotareas/rolcajerotareas.component';
import { RolcajeropedidospendientesComponent } from './components/rolcajeropedidospendientes/rolcajeropedidospendientes.component';
import { RolclienteverfacturaComponent } from './components/rolclienteverfactura/rolclienteverfactura.component';
import { VerpedidosclientesinconfirmarComponent } from './components/verpedidosclientesinconfirmar/verpedidosclientesinconfirmar.component';
import { ManualusuarioComponent } from './components/manualusuario/manualusuario.component';
import { RolcajeropedidosconfirmadosComponent } from './components/rolcajeropedidosconfirmados/rolcajeropedidosconfirmados.component';
import { RolcajerorepartidoresComponent } from './components/rolcajerorepartidores/rolcajerorepartidores.component';
import { PagoefectivopedidosComponent } from './components/pagoefectivopedidos/pagoefectivopedidos.component';
import { VerpedidosefectivoclienteComponent } from './components/verpedidosefectivocliente/verpedidosefectivocliente.component';
import { VerpedidossinconfirmarefectivoComponent } from './components/verpedidossinconfirmarefectivo/verpedidossinconfirmarefectivo.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { GuardadminGuard } from './services/guardadmin.guard';
import { InicioGestorComponent } from './components/inicio-gestor/inicio-gestor.component';
import { GuardgestorGuard } from './services/guardgestor.guard';
import { InicioClienteComponent } from './components/inicio-cliente/inicio-cliente.component';
import { GuardclienteGuard } from './services/guardcliente.guard';
import { InicioCajeroComponent } from './components/inicio-cajero/inicio-cajero.component';
import { GuardcajeroGuard } from './services/guardcajero.guard';
import { InicioRepartidorComponent } from './components/inicio-repartidor/inicio-repartidor.component';
import { GuardrepartidorGuard } from './services/guardrepartidor.guard';
import { InicioFacturadorComponent } from './components/inicio-facturador/inicio-facturador.component';
import { GuardfacturadorGuard } from './services/guardfacturador.guard';
import { RolcajeroefectivopedidosconfirmadosComponent } from './components/rolcajeroefectivopedidosconfirmados/rolcajeroefectivopedidosconfirmados.component';
import { RolcajerogenerarfacturaefectivoComponent } from './components/rolcajerogenerarfacturaefectivo/rolcajerogenerarfacturaefectivo.component';
import { ManualadminComponent } from './components/manualadmin/manualadmin.component';
import { ManualgestorComponent } from './components/manualgestor/manualgestor.component';
import { RoladminagregarcajaComponent } from './components/roladminagregarcaja/roladminagregarcaja.component';
import { RolcajeroverfacturasgeneradasComponent } from './components/rolcajeroverfacturasgeneradas/rolcajeroverfacturasgeneradas.component';
import { RolfacturadorverfacturasefectivoComponent } from './components/rolfacturadorverfacturasefectivo/rolfacturadorverfacturasefectivo.component';
import { RolfacturadortareasComponent } from './components/rolfacturadortareas/rolfacturadortareas.component';
import { RolcajerovercajaComponent } from './components/rolcajerovercaja/rolcajerovercaja.component';
import { RolfacturadorvercajaComponent } from './components/rolfacturadorvercaja/rolfacturadorvercaja.component';
import { ManualcajeroComponent } from './components/manualcajero/manualcajero.component';
import { RolcajeroverpedidosrepartidorComponent } from './components/rolcajeroverpedidosrepartidor/rolcajeroverpedidosrepartidor.component';
import { RolcajeroverpedidosentregadosComponent } from './components/rolcajeroverpedidosentregados/rolcajeroverpedidosentregados.component';
import { RolrepartidortareasComponent } from './components/rolrepartidortareas/rolrepartidortareas.component';
import { RolgestorinventarioproductosComponent } from './components/rolgestorinventarioproductos/rolgestorinventarioproductos.component';
import { InicioproductosComponent } from './components/inicioproductos/inicioproductos.component';
import { RolfacturadorfacturaselectronicasComponent } from './components/rolfacturadorfacturaselectronicas/rolfacturadorfacturaselectronicas.component';
import { RolfacturadoradmincajaComponent } from './components/rolfacturadoradmincaja/rolfacturadoradmincaja.component';
import { RolrepartidorverpedidoComponent } from './components/rolrepartidorverpedido/rolrepartidorverpedido.component';
import { RolgestorverempleadosComponent } from './components/rolgestorverempleados/rolgestorverempleados.component';

const routes: Routes = [


  /* VISTAS SIN ROL */
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicioproductos/:idSucursal', component: InicioproductosComponent },

  /* VISTAS DEL ROL ADMIN*/
  {
    path: 'admin', component: InicioAdminComponent, canActivate: [GuardadminGuard],
    children: [
      { path: 'vistaroladmin', component: VistaroladminComponent },
      { path: 'roladminusuarios', component: RoladminusuariosComponent },
      { path: 'roladminempresas', component: RoladminempresasComponent },
      { path: 'roladmincategoriasyproductos', component: RoladmincategoriasyproductosComponent },
      { path: 'editarroladmin', component: EditarroladminComponent },
      { path: 'roladmingestores', component: RoladmingestoresComponent },
      { path: 'roladminfacturadores', component: RoladminfacturadoresComponent },
      { path: 'roladminclientes', component: RoladminclientesComponent },
      { path: 'roladminrepartidores', component: RoladminrepartidoresComponent },
      { path: 'roladmincajeros', component: RoladmincajerosComponent },
      { path: 'roladminsucursales/:idEmpresa', component: RoladminsucursalesComponent },

      { path: 'roladmincategorias', component: RoladmincateComponent },
      { path: 'manualadmin', component: ManualadminComponent},
      { path: 'roladminagregarcaja', component: RoladminagregarcajaComponent},

    ],
  },


  /* VISTAS DEL ROL GESTOR */
  {
    path: 'gestor', component: InicioGestorComponent, canActivate: [GuardgestorGuard],
    children: [
      { path: 'vistarolgestor', component: VistarolgestorComponent },
      { path: 'rolgestorempresas', component: RolgestorempresasComponent },
      { path: 'rolgestorsucursales', component: RolgestorsucursalesComponent },
      { path: 'rolgestorcategorias/:idSucursal', component: RolgestorcategoriasComponent },
      { path: 'rolgestorproductos/:idCategoria', component: RolgestorproductosComponent },
      { path: 'editarrolgestor', component: EditarrolgestorComponent },
      { path: 'verganancias', component: VerGananciasComponent },
      { path: 'manualgestor', component: ManualgestorComponent},

      { path: 'rolgestorinventarioproductos/:idSucursal', component: RolgestorinventarioproductosComponent},

      { path: 'rolgestorverempleados/:idSucursal', component: RolgestorverempleadosComponent}
    ],
  },


  /* VISTAS DEL ROL CLIENTE */
  { path: 'cliente', component: InicioClienteComponent, canActivate: [GuardclienteGuard],
    children:[
      { path: 'vistarolcliente', component: VistarolclienteComponent },
      { path: 'editarrolcliente', component: EditarrolclienteComponent },
      { path: 'rolclientesucursales', component: RolclientesucursalesComponent },
      { path: 'rolclienteproductos/:idSucursal', component: RolclienteproductosComponent },
      { path: 'rolclientecategorias', component: RolclientecategoriasComponent },
      { path: 'manualusuario', component: ManualusuarioComponent },
      { path: 'rolclientecarrito', component: RolclientecarritoComponent },
      { path: 'pedidos/:idCarrito', component: PedidosComponent },
      { path: 'pagocreditopedidos', component: PagocreditopedidosComponent },
      { path: 'verpedidosclientessinconfirmar', component: VerpedidosclientesinconfirmarComponent },
      { path: 'verpedidoscliente', component: VerpedidosclienteComponent },
      { path: 'rolclienteverfactura/:idPedido', component: RolclienteverfacturaComponent },
      { path: 'pagoefectivopedidos', component: PagoefectivopedidosComponent },
      { path: 'verpedidosefectivocliente', component: VerpedidosefectivoclienteComponent },
      { path: 'verpedidossinconfirmarefectivo', component: VerpedidossinconfirmarefectivoComponent },

    ]
  },

  /* VISTAS ROL CAJERO */
  { path: 'cajero', component: InicioCajeroComponent, canActivate: [GuardcajeroGuard],
    children: [
      { path: 'vistarolcajero', component: VistarolcajeroComponent },
      { path: 'editarrolcajero', component: EditarrolcajeroComponent },
      { path: 'rolcajeroversucursales', component: RolcajeroversucursalesComponent },
      { path: 'rolcajerotareas/:idSucursal', component: RolcajerotareasComponent },
      { path: 'rolcajeropedidospendientes', component: RolcajeropedidospendientesComponent },
      { path: 'rolcajeropedidosconfirmados', component: RolcajeropedidosconfirmadosComponent },
      { path: 'rolcajerorepartidores', component: RolcajerorepartidoresComponent },
      { path: 'rolcajeroefetivopedidosconfirmados', component: RolcajeroefectivopedidosconfirmadosComponent },
      { path: 'rolcajerogenerarfacturaefectivo/:idPedido', component: RolcajerogenerarfacturaefectivoComponent},


      { path: 'rolcajeroverfacturasgeneradas', component: RolcajeroverfacturasgeneradasComponent},
      { path: 'rolcajerovercaja', component: RolcajerovercajaComponent},
      { path: 'manualcajero', component: ManualcajeroComponent},
      { path: 'rolcajeroverpedidosrepartidor/:idUsuario', component: RolcajeroverpedidosrepartidorComponent},
      { path: 'rolcajeroverpedidosentregados', component: RolcajeroverpedidosentregadosComponent}

    ]
  },


  /* VISTA ROL REPARTIDOR */

  { path: 'repartidor', component: InicioRepartidorComponent, canActivate: [GuardrepartidorGuard],
    children: [
      { path: 'vistarolrepartidor', component: VistarolrepartidorComponent },
      { path: 'editarrolrepartidor', component: EditarrolrepartidorComponent },
      { path: 'rolrepartidorversucursales', component: RolrepartidorversucursalesComponent },

      { path: 'rolrepartidortareas/:idSucursal', component: RolrepartidortareasComponent},

      { path: 'rolrepartidorverpedido', component: RolrepartidorverpedidoComponent},
    ]
  },

  /* VISTAS DEL FACTURADOR */

  { path: 'facturador', component: InicioFacturadorComponent, canActivate: [GuardfacturadorGuard],
    children: [
      { path: 'vistarolfacturador', component: VistarolfacturadorComponent },
      { path: 'editarrolfacturador', component: EditarrolfacturadorComponent },
      { path: 'rolfacturadorversucursales', component: RolfacturadorversucursalesComponent },

      { path: 'rolfacturadorverfacturasefectivo', component: RolfacturadorverfacturasefectivoComponent},

      { path: 'rolfacturadortareas/:idSucursal', component: RolfacturadortareasComponent},

      { path: 'rolfacturadorvercaja', component: RolfacturadorvercajaComponent},
      { path: 'rolfacturadorfacturaselectronicas', component: RolfacturadorfacturaselectronicasComponent},

      { path: 'rolfacturadoradmincaja', component: RolfacturadoradmincajaComponent}
    ]
  },

  /* RUTAS SIN USAR */
  { path: 'roladminfinalsucursales/:idUsuario', component: RoladminfinalsucursalesComponent },
  { path: 'ejemplo', component: EjemploComponent },


  // redirigir al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "**", component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
