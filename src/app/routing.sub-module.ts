import { DataAnalyticsComponent } from './view/content/service/data-analytics/data-analytics.component';
import { ApplicationComponent } from './view/content/service/application/application.component';
import { ServiceComponent } from './view/content/service/service.component';
import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { ContentComponent } from "./view/content/content.component";
import { HomeComponent } from "./view/content/home/home.component";
import { ProjectComponent } from "./view/content/project/project.component";
import { ContactComponent } from "./view/content/contact/contact.component";
import { CompanyComponent } from "./view/content/company/company.component";
import { WebsiteComponent } from './view/content/service/website/website.component';
import { EngineeringComponent } from './view/content/service/engineering/engineering.component';
const appRoutes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'project', component: ProjectComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'company', component: CompanyComponent },
            {
                path: 'service', component: ServiceComponent,
                children: [
                    { path: 'application', component: ApplicationComponent },
                    { path: 'website', component: WebsiteComponent },
                    { path: 'data', component: DataAnalyticsComponent },
                    { path: 'engineering', component: EngineeringComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }