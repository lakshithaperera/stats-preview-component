import React from 'react'
import { Container, ContainerLeft, ContainerRight, ContainerSection, Header, HighlightText,  Paragraph, Preview, PreviewContainer, PreviewText, PreviewValue } from './Cardcomponent.styled'

export const Cardcomponent = () => {
    return (
        <Container>
            <ContainerSection>
                <ContainerLeft>
                    <Header>
                        Get <HighlightText>insights</HighlightText> that help your business grow.
                    </Header>
                    <Paragraph> Discover the benefits of data analytics and make better decisions regarding revenue, customer
                        experience, and overall efficiency.</Paragraph>
                    <PreviewContainer>
                        <Preview>
                            <PreviewValue>10k+</PreviewValue>
                            <PreviewText>companies</PreviewText>
                        </Preview>

                        <Preview>
                            <PreviewValue>314</PreviewValue>
                            <PreviewText>templates</PreviewText>
                        </Preview>

                        <Preview>
                            <PreviewValue>12m+</PreviewValue>
                            <PreviewText>queries</PreviewText>
                        </Preview>
                    </PreviewContainer>
                </ContainerLeft>

                <ContainerRight>
                 
                </ContainerRight>
            </ContainerSection>

        </Container>
    )
}
