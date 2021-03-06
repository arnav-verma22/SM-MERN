import React from "react";

import "../css/explore.css";
import "../css/activities.css";

const Explore = () => {
    return(
        <>
        <div class="container">
<h1 class="h3 mb-3">Profile</h1>
<div class="row">
             <div class="col-md-8 col-xl-12">
        <div class="card">
            <div class="card-header">
                <div class="card-actions pull-right">
                    <div class="dropdown show">
                        <a href="#" data-toggle="dropdown" data-display="static">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <h5 class="card-title mb-0">Activities</h5>
            </div>
            <div class="card-body h-100">

                <div class="media">
                    <a href="#" class="pull-left">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="36" height="36" class="rounded-circle mr-2" alt="Kathy Davis" />
                    </a>
                    <div class="media-body">
                        <small class="float-right text-navy ">5m ago</small>
                        <strong>Kathy Davis</strong> started following <strong>Marie Salter</strong>
                        <br />
                        <small class="text-muted">Today 7:51 pm</small>
                        <br />

                    </div>
                </div>

                <hr />
                <div class="media">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" width="36" height="36" class="rounded-circle mr-2" alt="Andrew Jones" />
                    <div class="media-body">
                        <small class="float-right text-navy">30m ago</small>
                        <strong>Andrew Jones</strong> posted something on <strong>Marie Salter</strong>'s timeline
                        <br />
                        <small class="text-muted">Today 7:21 pm</small>

                        <div class="border text-sm text-muted p-2 mt-1">
                            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                        </div>

                        <a href="#" class="btn btn-sm btn-danger mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-sm">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg> Like</a>
                    </div>
                </div>

                <hr />
                <div class="media">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter" />
                    <div class="media-body">
                        <small class="float-right text-navy">1h ago</small>
                        <strong>Marie Salter</strong> posted a new blog
                        <br />

                        <small class="text-muted">Today 6:35 pm</small>
                    </div>
                </div>

                <hr />
                <div class="media">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="36" height="36" class="rounded-circle mr-2" alt="John Smith" />
                    <div class="media-body">
                        <small class="float-right text-navy">3h ago</small>
                        <strong>John Smith</strong> posted two photos on <strong>Marie Salter</strong>'s timeline
                        <br />
                        <small class="text-muted">Today 5:12 pm</small>

                        <div class="row no-gutters mt-1">
                            <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-fluid pr-2" alt="Unsplash" />
                            </div>
                            <div class="col-6 col-md-4 col-lg-4 col-xl-3">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-fluid pr-2" alt="Unsplash" />
                            </div>
                        </div>

                        <a href="#" class="btn btn-sm btn-danger mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart feather-sm">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg> Like</a>
                    </div>
                </div>

                <hr />
                <div class="media">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="36" height="36" class="rounded-circle mr-2" alt="John Smith" />
                    <div class="media-body">
                        <small class="float-right text-navy">1d ago</small>
                        <strong>John Smith</strong> started following <strong>Marie Salter</strong>
                        <br />
                        <small class="text-muted">Yesterday 3:12 pm</small>

                        <div class="media mt-1">
                            <a class="pr-3" href="#">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter" />
                            </a>
                            <div class="media-body">
                                <div class="border text-sm text-muted p-2 mt-1">
                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div class="media">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="36" height="36" class="rounded-circle mr-2" alt="Marie Salter" />
                    <div class="media-body">
                        <small class="float-right text-navy">1d ago</small>
                        <strong>Marie Salter</strong> posted a new blog
                        <br />
                        <small class="text-muted">Yesterday 2:43 pm</small>
                    </div>
                </div>

                <hr />
                <div class="media">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" width="36" height="36" class="rounded-circle mr-2" alt="Andrew Jones" />
                    <div class="media-body">
                        <small class="float-right text-navy">1d ago</small>
                        <strong>Andrew Jones</strong> started following <strong>Marie Salter</strong>
                        <br />
                        <small class="text-muted">Yesterdag 1:51 pm</small>
                    </div>
                </div>

                <hr />
                <a href="#" class="btn btn-primary btn-block">Load more</a>
            </div>
        </div>
    </div>
</div>
</div>




        </>
    )
}
export default Explore;