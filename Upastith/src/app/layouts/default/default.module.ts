import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
=======
import { MatSidenavModule } from '@angular/material/sidenav'
>>>>>>> c86a34061a12e9fcb2d76e420c9eea24f21a70cc
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';

@NgModule({
  declarations: [DefaultComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
<<<<<<< HEAD
    CustomMaterialModule,
  ],
=======
    CustomMaterialModule
  ]
>>>>>>> c86a34061a12e9fcb2d76e420c9eea24f21a70cc
})
export class DefaultModule {}
