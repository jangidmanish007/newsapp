import React, { Component } from 'react'


//newsDaily website using class based components 

export class NewsItems extends Component {

    render() {

        let { title, description, imageUrl, newsUrl} = this.props  // useState using class basaed components
        return (
            
                <div>
                    <div className="card mx-auto shadow border-0" style={{ width: '18rem'}}>
                        <img src={!imageUrl?"https://static.ffx.io/images/$zoom_0.3425%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/e93663904876ee10ba97a2fa1327d9a0b7a46867":imageUrl} style={{maxHeight:'150px'}} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl}  className="btn btn-sm btn-secondary">Read More</a>
                        </div>
                        
                    </div>
                    </div>
        )
    }
}

export default NewsItems
