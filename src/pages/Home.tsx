import { Box, Column, Row } from "@/kerry-ui"
import React from "react"

export const Home = () => {
    return <div>
        <Box>
            <Row>
                <Column sm={6}>
                    <div>1</div>
                </Column>
                <Column sm={6}>
                    <div>2</div>
                </Column>
            </Row>
        </Box>
    </div>
}