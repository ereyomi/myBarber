<template>
    <div class="container-fluid plan">
        <section class="container">
            <div class="row justify-content-center pb-3 pt-5 heading">
                <div class="col-md-7 heading-section text-center">
                    <h2 class="mb-4">Plan & Pricing</h2>
                    <p class="flip">
                        <span class="deg1"></span>
                        <span class="deg2"></span>
                        <span class="deg3"></span>
                    </p>
                    <p class="mt-5">Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia,
                        there live the blind texts.
                    </p>
                </div>
            </div>
        </section>
        <div class="row justify-content-center">
            <div class="col-10 col-md-8">
                <div class="pricing-entry ftco-animate">
                    <div class="d-flex text align-items-center">
                        <h3>
                            <span>Men's Haircut</span>
                        </h3>
                        <span class="price">$20.00</span>
                    </div>  
                    <div class="d-block">
                        <p>A small river named Duden flows by their place and supplies</p>
                    </div>
                </div>
                <div class="pricing-entry ftco-animate">
                    <div class="d-flex text align-items-center">
                        <h3><span>Children Haircut</span></h3>
                        <span class="price">$29.00</span>
                    </div>
                    <div class="d-block">
                        <p>A small river named Duden flows by their place and supplies</p>
                    </div>
                </div>
                <div class="pricing-entry ftco-animate">
                    <div class="d-flex text align-items-center">
                        <h3><span>Beard Cut</span></h3>
                        <span class="price">$20.00</span>
                    </div>
                    <div class="d-block">
                        <p>A small river named Duden flows by their place and supplies</p>
                    </div>
                </div>
                <div class="pricing-entry ftco-animate">
                    <div class="d-flex text align-items-center">
                        <h3><span>Men's Haircut</span></h3>
                        <span class="price">$20.00</span>
                    </div>
                    <div class="d-block">
                        <p>A small river named Duden flows by their place and supplies</p>
                    </div>
                </div>
            </div>
           <!--  -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlanAndPrice',
    }
</script>

<style lang="scss" scoped>
$primary: #ce9c6b;
$darken: #1b1b1b;
$white: #ffffff;
.plan {
    background: $darken;
    .heading {
        color: $white;
    }
}
//PRICING
.pricing-entry{
	width: 100%;
	display: block;
    margin-bottom: 30px;
    color: $white;
	.text{
		width: 100%;
		display: block;
		position: relative;
		z-index: 0;
		&:after{
			position: absolute;
			bottom: 35%;
			left: 0;
			right: 0;
			content: '';
			width: 100%;
			height: 1px;
			border-bottom: 1px dashed darken($primary,30%);
			z-index: -1;
		}
		h3{
			width: calc(100% - 80px);
			font-size: 18px;
			span{
                background: $darken;
				padding-right: 20px;
			}
		}
		.price{
			width: 80px;
			color: $primary;
			text-align: right;
			background: $darken;
			font-size: 16px;
		}
	}
}
</style>