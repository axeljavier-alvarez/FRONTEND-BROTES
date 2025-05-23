import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { VistarolgestorComponent } from './components/vistarolgestor/vistarolgestor.component';
import { VistaroladminComponent } from './components/vistaroladmin/vistaroladmin.component';
import { RoladmingestoresComponent } from './components/roladmingestores/roladmingestores.component';
import { VistarolfacturadorComponent } from './components/vistarolfacturador/vistarolfacturador.component';
import { RoladminfacturadoresComponent } from './components/roladminfacturadores/roladminfacturadores.component';
import { RoladminclientesComponent } from './components/roladminclientes/roladminclientes.component';
import { RoladminsucursalesComponent } from './components/roladminsucursales/roladminsucursales.component';
import { RoladminempresasComponent } from './components/roladminempresas/roladminempresas.component';
import { ChartsModule } from '@rinminase/ng-charts';
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
import { BuscarusuariopormunicipioPipe } from './pipes/buscarusuariopormunicipio.pipe';
import { EditarrolgestorComponent } from './components/editarrolgestor/editarrolgestor.component';
import { EditarrolfacturadorComponent } from './components/editarrolfacturador/editarrolfacturador.component';
import { EditarrolcajeroComponent } from './components/editarrolcajero/editarrolcajero.component';
import { EditarrolrepartidorComponent } from './components/editarrolrepartidor/editarrolrepartidor.component';
import { EditarrolclienteComponent } from './components/editarrolcliente/editarrolcliente.component';
import { EditarroladminComponent } from './components/editarroladmin/editarroladmin.component';
import { VistarolrepartidorComponent } from './components/vistarolrepartidor/vistarolrepartidor.component';
import { VistarolcajeroComponent } from './components/vistarolcajero/vistarolcajero.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VerpedidosclienteComponent } from './components/verpedidoscliente/verpedidoscliente.component';
import { PagocreditopedidosComponent } from './components/pagocreditopedidos/pagocreditopedidos.component';
import { RolcajeroversucursalesComponent } from './components/rolcajeroversucursales/rolcajeroversucursales.component';
import { RolrepartidorversucursalesComponent } from './components/rolrepartidorversucursales/rolrepartidorversucursales.component';
import { RolfacturadorversucursalesComponent } from './components/rolfacturadorversucursales/rolfacturadorversucursales.component';
import { BuscarproductoPipe } from './pipes/buscarproducto.pipe';
import { RolcajerotareasComponent } from './components/rolcajerotareas/rolcajerotareas.component';
import { RolcajeropedidospendientesComponent } from './components/rolcajeropedidospendientes/rolcajeropedidospendientes.component';
import { RolclienteverfacturaComponent } from './components/rolclienteverfactura/rolclienteverfactura.component';
import { BuscarsucursalPipe } from './pipes/buscarsucursal.pipe';
import { VerpedidosclientesinconfirmarComponent } from './components/verpedidosclientesinconfirmar/verpedidosclientesinconfirmar.component';
import { ManualusuarioComponent } from './components/manualusuario/manualusuario.component';
import { RolcajeropedidosconfirmadosComponent } from './components/rolcajeropedidosconfirmados/rolcajeropedidosconfirmados.component';
import { RolcajerorepartidoresComponent } from './components/rolcajerorepartidores/rolcajerorepartidores.component';
import { PagoefectivopedidosComponent } from './components/pagoefectivopedidos/pagoefectivopedidos.component';
import { VerpedidosefectivoclienteComponent } from './components/verpedidosefectivocliente/verpedidosefectivocliente.component';
import { VerpedidossinconfirmarefectivoComponent } from './components/verpedidossinconfirmarefectivo/verpedidossinconfirmarefectivo.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { InicioGestorComponent } from './components/inicio-gestor/inicio-gestor.component';
import { InicioClienteComponent } from './components/inicio-cliente/inicio-cliente.component';
import { InicioCajeroComponent } from './components/inicio-cajero/inicio-cajero.component';
import { InicioRepartidorComponent } from './components/inicio-repartidor/inicio-repartidor.component';
import { InicioFacturadorComponent } from './components/inicio-facturador/inicio-facturador.component';
import { RolcajeroefectivopedidosconfirmadosComponent } from './components/rolcajeroefectivopedidosconfirmados/rolcajeroefectivopedidosconfirmados.component';
import { RolcajerogenerarfacturaefectivoComponent } from './components/rolcajerogenerarfacturaefectivo/rolcajerogenerarfacturaefectivo.component';
import { ManualgestorComponent } from './components/manualgestor/manualgestor.component';
import { ManualadminComponent } from './components/manualadmin/manualadmin.component';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    EjemploComponent,
    VistarolgestorComponent,
    VistaroladminComponent,
    RoladmingestoresComponent,
    VistarolfacturadorComponent,
    RoladminfacturadoresComponent,
    RoladminclientesComponent,
    RoladminsucursalesComponent,
    RoladminempresasComponent,
    RoladminfinalsucursalesComponent,
    RolgestorcategoriasComponent,
    RoladminusuariosComponent,
    RoladmincategoriasyproductosComponent,
    RoladmincateComponent,
    RolgestorempresasComponent,
    RolgestorsucursalesComponent,
    RolgestorproductosComponent,
    VerGananciasComponent,
    VistarolclienteComponent,
    RolclientesucursalesComponent,
    RolclienteproductosComponent,
    RoladminrepartidoresComponent,
    RoladmincajerosComponent,
    RolclientecarritoComponent,
    RolclientecategoriasComponent,
    BuscarusuariopormunicipioPipe,
    EditarrolgestorComponent,
    EditarrolfacturadorComponent,
    EditarrolcajeroComponent,
    EditarrolrepartidorComponent,
    EditarrolclienteComponent,
    EditarroladminComponent,
    VistarolrepartidorComponent,
    VistarolcajeroComponent,
    InicioComponent,
    PedidosComponent,
    VerpedidosclienteComponent,
    PagocreditopedidosComponent,
    RolcajeroversucursalesComponent,
    RolrepartidorversucursalesComponent,
    RolfacturadorversucursalesComponent,
    BuscarproductoPipe,
    RolcajerotareasComponent,
    RolcajeropedidospendientesComponent,
    RolclienteverfacturaComponent,
    BuscarsucursalPipe,
    VerpedidosclientesinconfirmarComponent,
    ManualusuarioComponent,
    RolcajeropedidosconfirmadosComponent,
    RolcajerorepartidoresComponent,
    PagoefectivopedidosComponent,
    VerpedidosefectivoclienteComponent,
    VerpedidossinconfirmarefectivoComponent,
    InicioAdminComponent,
    InicioGestorComponent,
    InicioClienteComponent,
    InicioCajeroComponent,
    InicioRepartidorComponent,
    InicioFacturadorComponent,
    RolcajeroefectivopedidosconfirmadosComponent,
    RolcajerogenerarfacturaefectivoComponent,
    ManualgestorComponent,
    ManualadminComponent,
    RoladminagregarcajaComponent,
    RolcajeroverfacturasgeneradasComponent,
    RolfacturadorverfacturasefectivoComponent,
    RolfacturadortareasComponent,
    RolcajerovercajaComponent,
    RolfacturadorvercajaComponent,
    ManualcajeroComponent,
    RolcajeroverpedidosrepartidorComponent,
    RolcajeroverpedidosentregadosComponent,
    RolrepartidortareasComponent,
    RolgestorinventarioproductosComponent,
    InicioproductosComponent,
    RolfacturadorfacturaselectronicasComponent,
    RolfacturadoradmincajaComponent,
    RolrepartidorverpedidoComponent,
    RolgestorverempleadosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
