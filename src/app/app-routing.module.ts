import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MediaTaleComponent } from './media-tale/media-tale.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { HomeDisComponent } from './home/home-dis/home-dis.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';
import { FiveComponent } from './five/five.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
import { OneoneComponent } from './oneone/oneone.component';
import { OnetwoComponent } from './onetwo/onetwo.component';
import { OnethreeComponent } from './onethree/onethree.component';
import { OnefourComponent } from './onefour/onefour.component';
import { OnefiveComponent } from './onefive/onefive.component';
import { OnesixComponent } from './onesix/onesix.component';
import { OnesevenComponent } from './oneseven/oneseven.component';
import { OneeightComponent } from './oneeight/oneeight.component';
import { OnenineComponent } from './onenine/onenine.component';
import { OnetenComponent } from './oneten/oneten.component';
import { TwooneComponent } from './twoone/twoone.component';
import { TwotwoComponent } from './twotwo/twotwo.component';
import { TwothreeComponent } from './twothree/twothree.component';
import { TwofourComponent } from './twofour/twofour.component';
import { TwofiveComponent } from './twofive/twofive.component';
import { TwosixComponent } from './twosix/twosix.component';
import { TwosevenComponent } from './twoseven/twoseven.component';
import { TwoeightComponent } from './twoeight/twoeight.component';
import { TwonineComponent } from './twonine/twonine.component';
import { TwotenComponent } from './twoten/twoten.component';
import { ThreeoneComponent } from './threeone/threeone.component';
import { ThreetwoComponent } from './threetwo/threetwo.component';
import { ThreethreeComponent } from './threethree/threethree.component';
import { ThreefourComponent } from './threefour/threefour.component';
import { ThreefiveComponent } from './threefive/threefive.component';
import { ThreesixComponent } from './threesix/threesix.component';
import { ThreesevenComponent } from './threeseven/threeseven.component';
import { ThreeeightComponent } from './threeeight/threeeight.component';
import { ThreenineComponent } from './threenine/threenine.component';
import { ThreetenComponent } from './threeten/threeten.component';
import { FouroneComponent } from './fourone/fourone.component';
import { FourtwoComponent } from './fourtwo/fourtwo.component';
import { FourthreeComponent } from './fourthree/fourthree.component';
import { FourfourComponent } from './fourfour/fourfour.component';
import { FourfiveComponent } from './fourfive/fourfive.component';
import { FoursixComponent } from './foursix/foursix.component';
import { FoursevenComponent } from './fourseven/fourseven.component';
import { FoureightComponent } from './foureight/foureight.component';
import { FournineComponent } from './fournine/fournine.component';
import { FourtenComponent } from './fourten/fourten.component';
import { FivetenComponent } from './fiveten/fiveten.component';
import { FivenineComponent } from './fivenine/fivenine.component';
import { FiveeightComponent } from './fiveeight/fiveeight.component';
import { FivesevenComponent } from './fiveseven/fiveseven.component';
import { FivesixComponent } from './fivesix/fivesix.component';
import { FivefiveComponent } from './fivefive/fivefive.component';
import { FivefourComponent } from './fivefour/fivefour.component';
import { FiveoneComponent } from './fiveone/fiveone.component';
import { FivetwoComponent } from './fivetwo/fivetwo.component';
import { FivethreeComponent } from './fivethree/fivethree.component';
import { FloodComponent } from './flood/flood.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { DonationComponent } from './donation/donation.component';
import { ArticleComponent } from './article/article.component';
import { HistoryDisComponent } from './history/history-dis/history-dis.component';
import { NewsComponent } from './news/news.component';
import { PhotoTourComponent } from './photo-tour/photo-tour.component';


const routes: Routes = [

{
  path: '',
  component: HomeComponent,
  children:[
    {
      path:'',
      redirectTo: 'homedis',
      pathMatch:'full'
    },
    {

      path: 'homedis',
      component: HomeDisComponent,
      
    },
    {
      path: 'one',
      component: OneComponent,
                  
      },
      {
        path: 'two',
        component: TwoComponent,
                      
        },
        {
          path: 'three',
          component: ThreeComponent,
                        
          },
          {
            path: 'four',
            component: FourComponent,
                          
            },
            {
              path: 'five',
              component: FiveComponent,
                            
              },
              {
                path: 'six',
                component: SixComponent,
                              
                },
                {
                  path: 'seven',
                  component: SevenComponent,
                                
                  },
                  {
                    path: 'eight',
                    component: EightComponent,
                                  
                    },
                    {
                      path: 'nine',
                      component: NineComponent,
                                    
                      },
                      {
                        path: 'ten',
                        component: TenComponent,
                                      
                        },
                        {
                          path: 'oneone',
                          component: OneoneComponent,
                                        
                          },
                          {
                            path: 'onetwo',
                            component: OnetwoComponent,
                                          
                            },
                            {
                              path: 'onethree',
                              component: OnethreeComponent,
                                            
                              },
                              {
                                path: 'onefour',
                                component: OnefourComponent,
                                              
                                },
                                {
                                  path: 'onefive',
                                  component: OnefiveComponent,
                                                
                                  },
                                  {
                                    path: 'onesix',
                                    component: OnesixComponent,
                                                  
                                    },
                                    {
                                      path: 'oneseven',
                                      component: OnesevenComponent,
                                                    
                                      },
                                      {
                                        path: 'oneeight',
                                        component: OneeightComponent,
                                                      
                                        },
                                        {
                                          path: 'onenine',
                                          component: OnenineComponent,
                                                        
                                          },
                                          {
                                            path: 'oneten',
                                            component: OnetenComponent,
                                                          
                                            },
                                            {
                                              path: 'twoone',
                                              component: TwooneComponent,
                                                            
                                              },
                                              {
                                                path: 'twotwo',
                                                component: TwotwoComponent,
                                                              
                                                },
                                                {
                                                  path: 'twothree',
                                                  component: TwothreeComponent,
                                                                
                                                  },
                                                  {
                                                    path: 'twofour',
                                                    component: TwofourComponent,
                                                                  
                                                    },
                                                    {
                                                      path: 'twofive',
                                                      component: TwofiveComponent,
                                                                    
                                                      },
                                                      {
                                                        path: 'twosix',
                                                        component: TwosixComponent,
                                                                      
                                                        },
                                                        {
                                                          path: 'twoseven',
                                                          component: TwosevenComponent,
                                                                        
                                                          },
                                                          {
                                                            path: 'twoeight',
                                                            component: TwoeightComponent,
                                                                          
                                                            },
                                                            {
                                                              path: 'twonine',
                                                              component: TwonineComponent,
                                                                            
                                                              },
                                                              {
                                                                path: 'twoten',
                                                                component: TwotenComponent,
                                                                              
                                                                },
                                                                {
                                                                  path: 'threeone',
                                                                  component: ThreeoneComponent,
                                                                                
                                                                  },
                                                                  {
                                                                    path: 'threetwo',
                                                                    component: ThreetwoComponent,
                                                                                  
                                                                    },
                                                                    {
                                                                      path: 'threethree',
                                                                      component: ThreethreeComponent,
                                                                                    
                                                                      },
                                                                      {
                                                                        path: 'threefour',
                                                                        component: ThreefourComponent,
                                                                                      
                                                                        },
                                                                        {
                                                                          path: 'threefive',
                                                                          component: ThreefiveComponent,
                                                                                        
                                                                          },
                                                                          {
                                                                            path: 'threesix',
                                                                            component: ThreesixComponent,
                                                                                          
                                                                            },
                                                                            {
                                                                              path: 'threeseven',
                                                                              component: ThreesevenComponent,
                                                                                            
                                                                              },
                                                                              {
                                                                                path: 'threeeight',
                                                                                component: ThreeeightComponent,
                                                                                              
                                                                                },
                                                                                {
                                                                                  path: 'threenine',
                                                                                  component: ThreenineComponent,
                                                                                                
                                                                                  },
                                                                                  {
                                                                                    path: 'threeten',
                                                                                    component: ThreetenComponent,
                                                                                                  
                                                                                    },
                                                                                    {
                                                                                      path: 'fourone',
                                                                                      component: FouroneComponent,
                                                                                                    
                                                                                      },
                                                                                      {
                                                                                        path: 'fourtwo',
                                                                                        component: FourtwoComponent,
                                                                                                      
                                                                                        },
                                                                                        {
                                                                                          path: 'fourthree',
                                                                                          component: FourthreeComponent,
                                                                                                        
                                                                                          },
                                                                                          {
                                                                                            path: 'fourfour',
                                                                                            component: FourfourComponent,
                                                                                                          
                                                                                            },
                                                                                            {
                                                                                              path: 'fourfive',
                                                                                              component: FourfiveComponent,
                                                                                                            
                                                                                              },
                                                                                              {
                                                                                                path: 'foursix',
                                                                                                component: FoursixComponent,
                                                                                                              
                                                                                                },
                                                                                                {
                                                                                                  path: 'fourseven',
                                                                                                  component: FoursevenComponent,
                                                                                                                
                                                                                                  },
                                                                                                  {
                                                                                                    path: 'foureight',
                                                                                                    component: FoureightComponent,
                                                                                                                  
                                                                                                    },
                                                                                                    {
                                                                                                      path: 'fournine',
                                                                                                      component: FournineComponent,
                                                                                                                    
                                                                                                      },
                                                                                                      {
                                                                                                        path: 'fourten',
                                                                                                        component: FourtenComponent,
                                                                                                                      
                                                                                                        },
                                                                                                        {
                                                                                                          path: 'fiveone',
                                                                                                          component: FiveoneComponent,
                                                                                                                        
                                                                                                          },
                                                                                                          {
                                                                                                            path: 'fivetwo',
                                                                                                            component: FivetwoComponent,
                                                                                                                          
                                                                                                            },
                                                                                                            {
                                                                                                              path: 'fivethree',
                                                                                                              component: FivethreeComponent,
                                                                                                                            
                                                                                                              },
                                                                                                              {
                                                                                                                path: 'fivefour',
                                                                                                                component: FivefourComponent,
                                                                                                                              
                                                                                                                },
                                                                                                                {
                                                                                                                  path: 'fivefive',
                                                                                                                  component: FivefiveComponent,
                                                                                                                                
                                                                                                                  },
                                                                                                                  {
                                                                                                                    path: 'fivesix',
                                                                                                                    component: FivesixComponent,
                                                                                                                                  
                                                                                                                    },
                                                                                                                    {
                                                                                                                      path: 'fiveseven',
                                                                                                                      component: FivesevenComponent,
                                                                                                                                    
                                                                                                                      },
                                                                                                                      {
                                                                                                                        path: 'fiveeight',
                                                                                                                        component: FiveeightComponent,
                                                                                                                                      
                                                                                                                        },
                                                                                                                        {
                                                                                                                          path: 'fivenine',
                                                                                                                          component: FivenineComponent,
                                                                                                                                        
                                                                                                                          },
                                                                                                                          {
                                                                                                                            path: 'fiveten',
                                                                                                                            component: FivetenComponent,
                                                                                                                                          
                                                                                                                            },
                                                                                                                            {
                                                                                                                              path: 'flood',
                                                                                                                              component: FloodComponent,
                                                                                                                                            
                                                                                                                              },
                                                                                                                              {
                                                                                                                                path: 'challenge',
                                                                                                                                component: ChallengeComponent
                                                                                                                              },
                                                                                                                              {
                                                                                                                                path: 'donation',
                                                                                                                                component: DonationComponent
                                                                                                                              },
                                                                                                                              

      

  ]

},

      
{
path: 'mission',
component: MissionComponent,

},
{
  path: 'history',
  component: HistoryComponent,
  children:[
    {
      path:'',
      redirectTo: 'history-dis',
      pathMatch:'full'
    },
    
    {
      path: 'history-dis',
      component: HistoryDisComponent,
     

      },
      
     
      
  ]
  
  },
  {
    path: 'pt',
    component: PhotoTourComponent,
   
    },
  {
    path: 'art',
    component: ArticleComponent,
   
    },
    {
      path: 'news',
      component: NewsComponent,
     
      },

  {
    path: 'media-tale',
    component: MediaTaleComponent,
    
    },
    {
      path: 'faqs',
      component: FAQsComponent,
      
      },
      {
        path: 'contactUS',
        component: ContactUSComponent,
        
        },
        {
          path: 'career',
          component: CareerComponent,
          
          },
          
          
          
         
            
              

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
