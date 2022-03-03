import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomComponent } from "./components/room/room.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./components/login/login.component";
import { LayoutComponent } from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "room/:roomId",
        component: RoomComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
