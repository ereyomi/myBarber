<template>
    <div>
      <section class="ftco-section ftco-bg-dark">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section ftco-animate text-center">
              <h2 class="mb-4">Our Services</h2>
              <p class="flip"><span class="deg1"></span><span class="deg2"></span><span class="deg3"></span></p>
              <p class="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div> 
          </div>
          <div class="row">
            <div class="col-md-3 ftco-animate">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-4">
                  <span class="flaticon-scissor-and-comb"></span>
                </div>
                <div class="media-body">
                  <h3 class="heading">Haircuts &amp; Styling</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
            <div class="col-md-3 ftco-animate">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-4">
                  <span class="flaticon-male-head-hair-and-beard"></span>
                </div>
                <div class="media-body">
                  <h3 class="heading">Beard Treatment</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
            <div class="col-md-3 ftco-animate">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-4"><span class="flaticon-heads-hairs-and-scissors"></span></div>
                <div class="media-body">
                  <h3 class="heading">Coloring Services</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>    
            </div>
            <div class="col-md-3 ftco-animate">
              <div class="media d-block text-center block-6 services">
                <div class="icon d-flex justify-content-center align-items-center mb-4"><span class="flaticon-young-male-short-irregular-hair-on-head-and-a-small-beard"></span></div>
                <div class="media-body">
                  <h3 class="heading">Beard Waxing</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    name: 'Ourservices',
}
</script>

<style lang="scss" scoped>

$white: #fff;
$black: #000;
$darken: #1b1b1b;

$primary: #ce9c6b;

@mixin transition($transition) {
    -moz-transition:    all $transition ease;
    -o-transition:      all $transition ease;
    -webkit-transition: all $transition ease;
    -ms-transition: 		all $transition ease;
    transition:         all $transition ease;
}

//SERVICES
.services{
	.icon{
		width: 60px;
		height: 60px;
		margin: 0 auto;
		position: relative;
		z-index: 0;
		&:after{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			content: '';
			border: 1px solid $primary;
			z-index: -1;
			@include transition(.3s);
		}
		span {
			font-size: 30px !important;
			color: $primary;
      z-index: 1;
      margin-left: 0px !important;
		}
	}
	h3{
		font-size: 18px;
		margin-bottom: 20px;
		color: $white;
	}
	.media-body{
    p {
      color: $white;
      opacity: 0.5;
    }
	}
	&:hover{
		.icon{
			span{
				color: $white;
			}
			&:after{
				transform: rotate(135deg);
				background: $primary;
			}
		}
	}
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}
</style>