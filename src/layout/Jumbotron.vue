<template>
    <div>
        <b-jumbotron>
            <div>
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
                >
                    <b-carousel-slide
                    caption="First slide"
                    img-src="img/barbershop-f.jpg"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Second Slide"
                    img-src="img/barbershop-g.jpg"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Third Slide"
                    img-src="img/barbershop-c.jpg"
                    ></b-carousel-slide>
                </b-carousel>
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'Jumbotron',
    }
</script>

<style lang="scss" scoped>

</style>